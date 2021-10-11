import Wave from 'icons/Wave'
import Image from 'next/image'
import SectionTitle from 'components/SectionTitle'

export default function About() {
  return (
    <>
      <Wave className="w-full h-auto mt-24 text-gray-100 fill-current" />
      <section id="about" className="bg-gray-100 py-24">
        <div className="container px-4">
          <SectionTitle>About me</SectionTitle>
          <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between mt-12 space-y-8 sm:space-y-0 sm:space-x-8">
            <div className="w-[244px] relative h-[345px] overflow-hidden rounded flex-shrink-0">
              <Image
                src="/images/me.jpg"
                layout="fill"
                className="object-cover w-full"
                quality="100"
              />
            </div>
            <p>
              "The greatest glory in living lies not in never falling, but in
              rising every time we fall." I started to learn web development
              when I finished 9th grade. I started it because I had a dream to
              create a website where you can find movies, series, music, books,
              and self-development articles. This idea came to me when I was an
              8th grader. I started to learn web development because I could not
              forget it; it was always in my mind. I wanted to create it because
              movies, series, and music will attract people to the website, and
              these pages will redirect to books and self-development page by
              quotes of the day and some interesting features. I think it will
              help to increase the number of people who want to improve
              themselves and it will change the world. From 10th grade, I
              started to learn HTML, CSS, and JavaScript by watching YouTube
              videos. At that time, I told to my friends that I am going to
              create this website but unfortunately some of them did not believe
              me that a simple boy can create such a website. Even though it
              hurt me and lowered my self-esteem, I continued my journey. I
              continued because I had a passion to do it and I believed in
              myself. There were times where I wanted to quit web development
              because it was hard, I did not know what to learn, where to start,
              and did not have an instructor or a mentor who could teach me, who
              would show the path. But I knew that if I will not proceed, I will
              regret it for my whole life. That is why I could learn it and
              never give up. Now I know HTML, CSS, SASS, JavaScript, React, and
              Redux. Therefore, I believe that I am capable to work in your
              company and this work will help me to increase my knowledge to
              achieve the dream of a little boy who wanted to improve the world.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
