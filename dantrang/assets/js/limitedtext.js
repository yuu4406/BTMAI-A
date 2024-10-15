document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll(".limited-text");

    paragraphs.forEach(function(paragraph) {
        var originalText = paragraph.innerText;

        // Nếu văn bản dài hơn 100 ký tự, thì cắt ngắn lại
        if (originalText.length > 60) {
            var truncatedText = originalText.slice(0, 60);
            paragraph.innerText = truncatedText;
        }
    });
});