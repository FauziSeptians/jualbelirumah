export function highlightText(text: string, query: string) {
    if (!query.trim()) {
        return text;
    }

    // Escape special characters in the query
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create regex with case-insensitive flag
    const regex = new RegExp(`(${escapedQuery})`, 'gi');

    // Replace matches with highlighted spans
    return text.replace(regex, '<span style="background-color: #ffeb3b; font-weight: bold;">$1</span>');
};
