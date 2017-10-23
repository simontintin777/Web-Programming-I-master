# CS-546 Lab 5

## An HTML Document
For this lab, we will create our first 3 HTML files!

This lab is unique in a major way: there is no node code this week!

The major concepts of this lab are:

* Making data-centered HTML Documents
    - Thinking in terms of describing our data, without care for the visual aspect
    - Focusing on structure and semantical validity.
* Writing valid HTML
    Your HTML must be valid (Links to an external site.)Links to an external site. or you will lose points on the assignment.
* Linking between pages
    You will use a basic navigation structure (see below) on each page to link to all the pages you are writing.

## Starting an HTML Document

Your HTML documents should start with the following format. This is a basic, valid, HTML document structure. Your content goes inside of the body tags.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>title</title>
  </head>
  <body>
    <!-- page content -->
  </body>
</html>

## Navigation Structure

Each page should include a navigation that links to both other pages

These links will come in the form of the following setup (this code is not complete; you should describe each page, give the anchors relative file locations, etc!):

<header>
  <nav>
    <ul>
      <li><a>Page</a></li>
      <li><a>Page</a></li>
      <li><a>Page</a></li>
    </ul>
  </nav>
</header>

## About the content

You are allowed to make up all the content. If you do not want to give the real information in the HTML documents, feel free to make up the content with an elaborate (or not so elaborate) story.

If you need ideas, I recommend talking about:

Your life as a dinosaur trainer
Your time in various schools of witchcraft and wizardry
A brief story about the time you discovered a dastardly plot where a group of velociraptors were working in the shadows to take over the country of New Zealand.

## index.html

In index.html, you will write a document describing yourself and your likes. In this document you will:

Include a heading tag with your name; for example, I would make mine say About Phil Barresi. You should also include a similar description in your title tag.
Create a main element with several sections inside of it; each section will have a heading describing the content inside of it.
Your sections will be:

A short, 1-2 paragraph biography about yourself
An ordered list of your favorite TV shows, ranked by how much you like each show
An unordered list of your hobbies

## education.html

In education.html, you will write a document describing yourself and your likes. In this document you will:

Include a heading tag describing the page; for example, I would make mine say My Education. You should also include a similar description in your title tag.
Create a main element with many articles inside of it. Each article will describe a school you have gone to, as well as the following details about that school:

The school's name
The school's degree
Your favorite class in that school
A memorable memory from your time in that school

## story.html

In story.html, you will write a document telling a story that you'd like to share with the world.

Include a heading tag describing the page; for example, I would make mine say That Time I Overreacted and Bought a Macbook. You should also include a similar description in your titletag.
Create a main element with the necessary HTML content to tell your story.

## General Requirements

1. Your HTML must be valid (Links to an external site.)Links to an external site. or you will lose points on the assignment.
2. Your HTML must make semantical sense; usage of tags for the purpose of simply changing the style of elements (such as i, b, font, center, etc) will result in points being deducted; think in terms of content first; style is done in CSS, not your HTML!
3. You can be as creative as you'd like to fulfill front-end requirements; if an implementation is not explicitly stated, however you go about it is fine (provided the HTML is valid and semantical). Design is not a factor in this course.