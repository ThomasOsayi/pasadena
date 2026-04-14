"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";

type FileDropzoneProps = {
  onFilesSelected?: (files: File[]) => void;
  accept?: string;
  maxSizeMB?: number;
};

export default function FileDropzone({
  onFilesSelected,
  accept = ".pdf,.jpg,.jpeg,.png",
  maxSizeMB = 10,
}: FileDropzoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileCount, setFileCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    const fileArray = Array.from(files);
    setFileCount(fileArray.length);
    onFilesSelected?.(fileArray);
  }

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDragLeave(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragOver(false);
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    handleFiles(e.target.files);
  }

  function openFileDialog() {
    inputRef.current?.click();
  }

  return (
    <div
      onClick={openFileDialog}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openFileDialog();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Upload files"
      className={`border border-dashed px-5 py-6 text-center cursor-pointer transition-all duration-250 ${
        isDragOver
          ? "border-burgundy bg-cream-warm"
          : "border-line bg-cream hover:border-burgundy hover:bg-cream-warm"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={accept}
        onChange={handleChange}
        className="hidden"
        aria-hidden
      />

      <svg
        className="w-6 h-6 text-burgundy mx-auto mb-2.5 block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
      </svg>

      {fileCount === 0 ? (
        <>
          <div className="font-display text-[15px] mb-1">
            Attach plans, sketches, or inspiration photos
          </div>
          <div className="text-[11px] text-ink-muted">
            {accept.split(",").join(", ").toUpperCase().replace(/\./g, "")} — up to{" "}
            {maxSizeMB}MB total (optional)
          </div>
        </>
      ) : (
        <>
          <div className="font-display text-[15px] mb-1 text-burgundy">
            {fileCount} {fileCount === 1 ? "file" : "files"} selected
          </div>
          <div className="text-[11px] text-ink-muted">
            Click or drop to replace
          </div>
        </>
      )}
    </div>
  );
}