import "../blogs/Blog3.css";

const Blog3 = () => {
  return (
    <div className="blog1-blogposts">
      <div className="blog1-col">
        <div className="blog1-blogposts-head">
          <h1 className="blog1-blogposts-h1">
            Attention Deficit Hyperactive Disorder - ADHD{" "}
          </h1>
          <br />
        </div>
        <div>
          <h2>1. What is ADHD?</h2>
          <br />

          <p className="blog1-blogpost1-para1">
            ADHD is one of the most common neurodevelopmental disorders of
            childhood. It is usually first diagnosed in childhood and often
            lasts into adulthood. ADHD also affects many adults. Symptoms of
            ADHD include inattention (not being able to keep focus),
            hyperactivity (excess movement that is not fitting to the setting)
            and impulsivity (hasty acts that occur in the moment without
            thought). An estimated 8.4% of children and 2.5% of adults have
            ADHD. ADHD is often first identified in school-aged children when it
            leads to disruption in the classroom or problems with schoolwork. It
            can also affect adults. It is more common among boys than girls.
          </p>
        </div>
      </div>
      <div className="blog1-col">
        <div>
          <h2>2. How is ADHD diagnosed?</h2>
          <br />

          <p className="blog1-blogpost1-para1">
            Deciding if a child has ADHD is a process with several steps. There
            is no single test to diagnose ADHD, and many other problems, like
            anxiety, depression, sleep problems, and certain types of learning
            disabilities, can have similar symptoms. One step of the process
            involves having a medical exam, including hearing and vision tests,
            to rule out other problems with symptoms like ADHD. Diagnosing ADHD
            usually includes a checklist for rating ADHD symptoms and taking a
            history of the child from parents, teachers, and sometimes, the
            child.
          </p>
        </div>
      </div>
      <div className="blog1-col">
        <div>
          <h2>3. What is the DSM Criteria?</h2>
          <br />

          <p className="blog1-blogpost1-para1">
            <h3>I. Inattentive Type Diagnosis Criteria</h3>
            <ul>
              <li>• Displays poor listening skills.</li>
              <li>
                • Loses and/or misplaces items needed to complete activities or
                tasks.
              </li>
              <li> • Forgets daily activities.</li>
              <li>
                • Avoids or is disinclined to begin homework or activities
                requiring concentration.
              </li>
              <li>
                • Fails to focus on details and/or makes thoughtless mistakes in
                schoolwork or assignments.
              </li>
            </ul>
            <br />
            <h3>
              II. Hyperactive/ Impulsive Type Diagnosis Criteria <br />{" "}
              Hyperactive Symptoms:
            </h3>
            <ul>
              <li>• Squirms when seated or fidgets with feet/hands.</li>
              <li>• Marked restlessness that is difficult to control.</li>
              <li>• Incapable of staying seated in class.</li>
              <li>
                Lacks the ability to play and engage in leisure activities in a
                quiet manner.
              </li>
              <li>
                • Appears to be driven by “a motor” or is often “on the go”.
              </li>
            </ul>
            <br />
            <h3>III. Additional Requirements for Diagnosis</h3>
            <ul>
              <li>• Symptoms present prior to age 12 years.</li>
              <li>
                • Symptoms are not better accounted for by a different
                psychiatric disorder (e.g., mood disorder, anxiety disorder) and
                do not occur exclusively during a psychotic disorder (e.g.
                schizophrenia).
              </li>
              <li>
                • Symptoms are not exclusively a manifestation of oppositional
                behaviour.
              </li>
            </ul>
            <br />
            <br />
            <h3>IV. Classification</h3>

            <ul>
              <li>
                • Combined Type: Patient meets both inattentive and
                hyperactive/impulsive criteria for the past 6 months
              </li>
              <li>
                • Predominantly Inattentive Type: Patient meets the inattentive
                criterion, but not hyperactive/impulse criterion, for the past 6
                months.
              </li>
              <li>
                • Predominantly Hyperactive/Impulsive Type: Patient meets
                hyperactive/impulse criterion, but not inattentive criterion,
                for the past 6 months. Symptoms may be classified as mild,
                moderate, or severe based on symptom severity.
              </li>
            </ul>
            <br />
            <br />
            <h3>What to expect in the treatment plan?</h3>
            <p>
              In most cases, ADHD is best treated with a combination of
              behaviour therapy and medication. For preschool-aged children (4-5
              years of age) with ADHD, behaviour therapy, particularly training
              for parents, is recommended as the first line of treatment before
              medication is tried. What works best can depend on the child and
              family. Good treatment plans will include close monitoring,
              follow-ups, and making changes.
            </p>
          </p>
          <br />
          <br />
          <h4>References</h4>
          <ul>
            <li>
              <a href="https://www.apa.org/topics/adhd">
                https://www.apa.org/topics/adhd
              </a>
            </li>
            <li>
              <a href="https://www.psychiatry.org/patients-families/adhd/what-is-adhd">
                https://www.psychiatry.org/patients-families/adhd/what-is-adhd
              </a>
            </li>
            <li>
              <a href="https://www.mayoclinic.org/diseases-conditions/adhd/symptoms-causes/syc-20350889">
                https://www.mayoclinic.org/diseases-conditions/adhd/symptoms-causes/syc-20350889
              </a>
            </li>
            <li>
              <a href="https://www.nimh.nih.gov/health/publications/attention-deficit-hyperactivity-disorderadhd-the-basics/">
                https://www.nimh.nih.gov/health/publications/attention-deficit-hyperactivity-disorderadhd-the-basics/
              </a>
            </li>
            <li>
              <a href="https://www.cdc.gov/ncbddd/adhd/index.html">
                https://www.cdc.gov/ncbddd/adhd/index.html
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer className="home-footer">
        <div className="footer-heading">
          <h1>Team Cipher</h1>
          <hr />
        </div>
        <div className="team-name">
          <div>
            <h3 className="mem-name">Ritesh Singh</h3>
          </div>
          <div>
            <h3 className="mem-name">Yash Dubey</h3>
          </div>
          <div>
            <h3 className="mem-name">Rohit Vishwakarma</h3>
          </div>
          <div>
            <h3 className="mem-name">Atishara Shrivastava</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog3;
