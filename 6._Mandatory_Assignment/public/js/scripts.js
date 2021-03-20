const menu = `<div class = "menu">
<ul class = "menu menuList">
    <li class="navButton"><a href="/">Getting Started</a></li>
    <li class="navButton"><a href="/json">JSON</a></li>
    <li class="navButton"><a href="/http">Rest API</a></li>
    <li class="navButton"><a href="/javascript">Javascript</a></li>
    <li class="navButton"><a href="/jquery">jQuery</a></li>
</ul>
</div>`;

const footer = `<footer>&copy; 4th Semester Node.js Mandatory Project Marianna Zimmermannova 2021</footer>`;

$("body").prepend(menu);
$("body").append(footer);