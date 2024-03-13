export default function Volunteer() {
  return (
    <>
      <h1 className=" text-2xl underline font-extrabold leading-none tracking-tight m-10 text-center text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        Become a Volunteer
      </h1>

      <ol className="space-y-4 text-gray-500 list-none list-inside ml-6  dark:text-gray-400">
        <li className="">
          <span className="font-extrabold text-xl">
            We offer our volunteers the chance to develop through acts of
            selflessness. <br /> You can contribute in any of the following
            ways:
          </span>
          <ul className="ps-5 mt-4 space-y-1 list-disc list-inside my-10 ">
            <li>
              Conduct classes at SADS-affiliated NGOs – such as dance classes,
              motivational talks for children, musical instrument lessons, etc.
            </li>
            <li>
              Assist in motivating people to donate items that are idle in their
              homes – Join our inspiring campaigns or help us devise new ones!
            </li>
            <li>
              Coordinate drives at schools, colleges, and communities to spread
              happiness together.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-extrabold text-xl">
            Utilize your talents to spread joy:
          </span>
          <ul className="ps-5 mt-4 space-y-1 list-disc list-inside my-10 ">
            <li>
              If you are a Homemaker, be our Society representative and help us
              organize drives at your society.
            </li>
            <li>
              If you are a photographer, you can make our special kids happy.
              They sooooooo love posing and getting clicked.
            </li>
            <li>
              If you are creative and good at animations, you can make small
              animated videos that motivate people to donate for the cause.
            </li>
            <li>
              If you are a techie, you can help us grow in making our platform
              better or take up a project at one of our NGO partners.
            </li>
          </ul>
        </li>
        <p className="font-extrabold text-xl my-10 text-gray-500 dark:text-gray-400">
          Whatever your talent may be, we believe you can use it to spread
          happiness with us!!
        </p>
        <p className="space-y-4 text-gray-500 list-none list-inside mx-6  dark:text-gray-400">
          Please email us at contact@shareatdoorstep.com with your resume,
          indicating the type of volunteering opportunities you seek. Ensure the
          subject line reads “Volunteer: (name), (skillset)”.
        </p>
        <p className="font-extrabold text-xl pb-10 text-gray-500 dark:text-gray-400">
          Happy Volunteering!
        </p>
      </ol>
    </>
  );
}
