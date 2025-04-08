import { useState, useEffect } from 'react';

const useTypewriter = (words, typingSpeed = 150, deletingSpeed = 50, pauseTime = 1500) => {
    const [text, setText] = useState(''); // Current text being displayed
    const [wordIndex, setWordIndex] = useState(0); // Index of the word being typed
    const [isDeleting, setIsDeleting] = useState(false); // Flag to check if deleting or typing

    useEffect(() => {
        const currentWord = words[wordIndex % words.length]; // Wrap around when at the end

        let timeout; // this will hold the timeout ID

        if (isDeleting) {
            // If we're deleting, remove one character at a time
            timeout = setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
            }, deletingSpeed);
        } else {
            // If we're typing, add one character at a time
            timeout = setTimeout(() => {
                setText((prev) => currentWord.slice(0, prev.length + 1));
            }, typingSpeed);
        }

        // When typing is done, wait for a bit and then start deleting
        if (!isDeleting && text === currentWord) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        }

        // When deletion is done, move to the next word and start typing
        if (isDeleting && text === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length); // Loop back to start if needed
        }

        // Clean up timeout to avoid memory leaks or unexpected behavior
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return text; // Expose the currently typed text
};

export default useTypewriter;
