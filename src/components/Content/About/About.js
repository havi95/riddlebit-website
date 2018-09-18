import React from 'react';
import './About.css';
import OurTeam from './OurTeam/OurTeam';

const About = () => (
    <div id='about' className='about-content'>
        <h1>About</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas placeat dolor quibusdam porro praesentium rerum amet vitae. Laborum, mollitia distinctio. Cupiditate nobis culpa perferendis sapiente molestiae aut, officia voluptates, magni modi eius recusandae enim dolores qui nisi, labore cumque magnam. Et voluptate rerum ut eaque nam natus ipsam cum iure? Ducimus itaque tempore deleniti porro, et error perspiciatis sint maxime assumenda quo incidunt accusantium iure. Ut soluta ab necessitatibus similique, ea asperiores autem sint itaque cum aliquid illo maiores quasi molestias voluptatem placeat quas ipsa aut aspernatur reprehenderit nostrum esse minima eveniet consequuntur iure. Sint vitae itaque sapiente neque.</p>
        <OurTeam />
    </div>
);

export default About;