import React, { useState } from "react";
import Button from "../components/Button";
import TextField from "@mui/material/TextField";
import chapters from "../../config";
import {
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  LinearProgress,
  Typography,
  Box,
} from "@mui/material";

function MultiStepForm() {
  const screens = chapters.flatMap((chap) => chap.screens);

  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const currentScreen = screens[currentScreenIndex];

  const currentChapter = chapters.find((c) =>
    c.screens.includes(currentScreen)
  );

  const currentScreenIndexInChapter =
    currentChapter.screens.indexOf(currentScreen);

  const handleChange = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [question.id]: "",
    }));
  };

  const validateScreen = () => {
    let newErrors = {};
    currentScreen.questions.forEach((q) => {
      const value = answers[q.id];

      if (q.required && !answers[q.id]) {
        newErrors[q.id] = "This field is required.";
      }
      if (q.validation === "number" && value && !/^\d+$/.test(value)) {
        newErrors[q.id] = "Please enter a valid number.";
      }
      if (
        q.validation === "email" &&
        value &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        newErrors[q.id] = "Please enter a valid email address.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateScreen()) {
      setCurrentScreenIndex((i) => i + 1);
    }
  };

  const handleBack = () => {
    setCurrentScreenIndex((i) => i - 1);
  };

  const handleSubmit = () => {
    if (validateScreen()) {
      if (submitted) return;
      console.log("Final Answers:", answers);
      alert("Form submitted! Check console for answers.");
      setSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-100 -z-10"></div>

      <div className="fixed top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -z-10"></div>
      <div className="fixed bottom-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -z-10"></div>

      {/* Form */}
      <div
        className="w-full min-w-sm min-h-[40rem] flex flex-col my-10 max-w-5xl mx-auto px-6 sm:px-10 md:px-12 rounded-2xl shadow-2xl py-10 bg-white/70 backdrop-blur-lg border border-white/40"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (currentScreenIndex === screens.length - 1) {
              handleSubmit();
            } else {
              handleNext();
            }
          }
        }}
      >
        <Box className="mb-8">
          <div className="flex flex-wrap items-center w-full">
            {chapters.map((chapter, idx) => {
              const total = chapter.screens.length;
              const isCurrent = chapter.id === currentChapter.id;
              const isCompleted =
                screens.indexOf(chapter.screens.at(-1)) < currentScreenIndex;

              let completedScreens = 0;
              if (isCurrent) {
                if (
                  idx === chapters.length - 1 &&
                  currentScreenIndexInChapter === total - 1
                ) {
                  completedScreens = total;
                } else {
                  completedScreens = currentScreenIndexInChapter;
                }
              } else if (isCompleted) {
                completedScreens = total;
              }

              const value = (completedScreens / total) * 100;

              return (
                <React.Fragment key={chapter.id}>
                  {/* Numbered circle + label */}
                  <div className="flex flex-col items-center mx-1 sm:mx-2 min-w-[50px]">
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm font-bold
                ${
                  isCompleted
                    ? "bg-purple-700 text-white"
                    : isCurrent
                    ? "bg-purple-600 text-white"
                    : "bg-purple-200 text-purple-600"
                }`}
                    >
                      {idx + 1}
                    </div>
                    <Typography
                      variant="caption"
                      className={`mt-1 text-[10px] sm:text-xs text-center ${
                        isCurrent
                          ? "font-bold text-purple-700"
                          : isCompleted
                          ? "text-purple-700"
                          : "text-purple-400"
                      }`}
                    >
                      {chapter.title}
                    </Typography>
                  </div>

                  {/* Progress segment */}
                  {idx < chapters.length - 1 && (
                    <LinearProgress
                      variant="determinate"
                      value={value}
                      sx={{
                        flex: 1,
                        height: 4,
                        borderRadius: 5,
                        mx: 0.5,
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 5,
                          backgroundColor: isCompleted
                            ? "#6d28d9"
                            : isCurrent
                            ? "#7c3aed"
                            : "#ddd6fe",
                        },
                        backgroundColor: "#ede9fe",
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </Box>

        <div className="flex-grow">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 text-center relative">
            {chapters.find((c) => c.screens.includes(currentScreen))?.title}
            <span className="block h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-2 rounded-full"></span>
          </h2>

          {currentScreen.questions.map((q) => (
            <div key={q.id} className="mb-6 text-left">
              {/* Text input */}
              {q.type === "text" && (
                <TextField
                  id={q.id}
                  label={q.label}
                  variant="standard"
                  value={answers[q.id] || ""}
                  onChange={(e) => handleChange(q, e.target.value)}
                  fullWidth
                  error={!!errors[q.id]}
                  helperText={errors[q.id] || ""}
                />
              )}

              {/* Radio input */}
              {q.type === "radio" && (
                <FormControl
                  error={!!errors[q.id]}
                  component="fieldset"
                  fullWidth
                >
                  <FormLabel className="mb-2">{q.label}</FormLabel>
                  <RadioGroup
                    row={
                      q.options.length > 2 &&
                      currentScreen.questions.length >= 5
                    }
                    name={q.id}
                    value={answers[q.id] || ""}
                    onChange={(e) => handleChange(q, e.target.value)}
                  >
                    {q.options.map((opt) => (
                      <FormControlLabel
                        key={opt}
                        value={opt}
                        control={<Radio />}
                        label={opt}
                        className="pl-4" // ✅ space between radio & label
                      />
                    ))}
                  </RadioGroup>
                  {errors[q.id] && (
                    <FormHelperText>{errors[q.id]}</FormHelperText>
                  )}
                </FormControl>
              )}

              {/* Checkbox input */}
              {q.type === "checkbox" && (
                <FormControl
                  error={!!errors[q.id]}
                  component="fieldset"
                  fullWidth
                >
                  <FormLabel className="mb-2">{q.label}</FormLabel>
                  <FormGroup
                    row={
                      q.options.length > 2 &&
                      currentScreen.questions.length >= 5
                    }
                  >
                    {q.options.map((opt) => (
                      <FormControlLabel
                        key={opt}
                        control={
                          <Checkbox
                            checked={answers[q.id]?.includes(opt) || false}
                            onChange={(e) => {
                              const prev = answers[q.id] || [];
                              if (e.target.checked) {
                                handleChange(q, [...prev, opt]);
                              } else {
                                handleChange(
                                  q,
                                  prev.filter((o) => o !== opt)
                                );
                              }
                            }}
                          />
                        }
                        label={opt}
                        className="pl-4" // ✅ space between checkbox & label
                      />
                    ))}
                  </FormGroup>
                  {errors[q.id] && (
                    <FormHelperText>{errors[q.id]}</FormHelperText>
                  )}
                </FormControl>
              )}
            </div>
          ))}
        </div>

        {submitted && (
          <div className="text-center mt-4">
            <p className="text-green-600 font-semibold">
              Response successfully recorded ✅
            </p>
            <button
              onClick={() => {
                setAnswers({});
                setErrors({});
                setCurrentScreenIndex(0);
                setSubmitted(false);
              }}
              className="mt-2 text-purple-700 font-medium underline hover:text-purple-900 hover:cursor-pointer"
            >
              Record another response
            </button>
          </div>
        )}
        {/* Buttons */}
        <div className="flex justify-between">
          <Button
            disabled={currentScreenIndex === 0}
            label="Back"
            onClick={handleBack}
            className="bg-gray-600 hover:bg-gray-500"
          />
          <Button
            disabled={submitted}
            label={
              currentScreenIndex === screens.length - 1 ? "Submit" : "Continue"
            }
            onClick={
              currentScreenIndex === screens.length - 1
                ? handleSubmit
                : handleNext
            }
            className={
              currentScreenIndex === screens.length - 1
                ? "bg-green-600 hover:bg-green-700"
                : "bg-indigo-600 hover:bg-indigo-700"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
