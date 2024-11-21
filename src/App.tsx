
import './App.css'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card';
import { Badge } from './components/ui/badge'

function App() {

  const outcomes = [
    {
      title: "Introduction to data communications concepts and theory",
      status: "in progress",
      artifacts: [
        "Discussion post on LANs, WANs, and PANs",
        "Discussion post on Virtual Local Area Networks (VLANs)",
        "Discussion post on Routing and Transport",
        "Discussion post on Application Layer Services",
        "Individual Self-Development Project proposal"
      ],
      demonstration: "in progress"
    },
    {
      title: "Understand basic networking concepts",
      status: "in progress",
      artifacts: [
        "Discussion post on LANs, WANs, and PANs",
        "Discussion post on Virtual Local Area Networks (VLANs)",
        "Research on 5 potential employers and job qualifications",
        "Discussion post on Routing and Transport",
        "Comparison of network routing to physical routing systems"
      ],
      demonstration: "good"
    },
    {
      title: "Understand the basics of the OSI model",
      status: "in progress",
      artifacts: [
        "Discussion post on how VLANs affect the OSI model",
        "Analysis of transport layer in network communications",
        "Discussion on Application layer services"
      ],
      demonstration: "in progress"
    },
    {
      title: "Understand the functions of each layer of the OSI model",
      status: "in progress",
      artifacts: [
        "Discussion on transport layer's role in data transfer speed and accuracy",
        "Analysis of Application layer services and their importance"
      ],
      demonstration: "in progress"
    },
    {
      title: "Understand basic routing concepts",
      status: "in progress",
      artifacts: [
        "Discussion post on network routing compared to physical routing",
        "Analysis of potential adjustments needed for interplanetary communications"
      ],
      demonstration: "in progress"
    },
    {
      title: "Understand basic network security concepts",
      status: "not started",
      artifacts: [],
      demonstration: "not started"
    }
  ];

  const objectives = [
    {
      title: "Develop a broad understanding of data, voice, and network technology",
      status: "in progress",
      artifacts: [
        "Discussion post on LANs, WANs, and PANs",
        "Discussion post on Virtual Local Area Networks (VLANs)",
        "Research on job qualifications and required skills in the field",
        "Discussion post on Routing and Transport",
        "Analysis of Application layer services"
      ],
      demonstration: "good"
    },
    {
      title: "Identify and explain fundamental communication and network concepts and protocols, especially the OSI model, TCP/IP, and Ethernet standards",
      status: "in progress",
      artifacts: [
        "Discussion post on how VLANs affect the OSI and TCP/IP models",
        "Analysis of VLAN implementation in wired and wireless networks",
        "Comparison of network routing to postal and package delivery systems",
        "Discussion on transport layer's role in data transfer"
      ],
      demonstration: "good"
    },
    {
      title: "Identify and explain networks and network management concepts",
      status: "in progress",
      artifacts: [
        "Analysis of routing and transport in network management",
        "Discussion on the importance of Application layer services in network management"
      ],
      demonstration: "in progress"
    },
    {
      title: "Identify and apply network and networking tools-related skills; design, present, and price alternative networks",
      status: "in progress",
      artifacts: [
        "Individual Self-Development Project proposal focusing on practical networking skills"
      ],
      demonstration: "in progress"
    },
    {
      title: "Implement fundamental and advanced features within the Linux operating system",
      status: "not started",
      artifacts: [],
      demonstration: "not started"
    }
  ];

  const topics = [
    {
      title: "Data Technologies",
      description: "Exploration of various data technologies and their applications in modern networks.",
      artifacts: [
        "Discussion on transport layer's role in ensuring quick and accurate data transfer"
      ]
    },
    {
      title: "Voice Technologies",
      description: "Understanding of voice communication technologies and their integration with data networks.",
      artifacts: []
    },
    {
      title: "Network Technologies",
      description: "Comprehensive study of network technologies, including wired and wireless networks.",
      artifacts: [
        "Analysis of routing in network communications",
        "Exploration of transport protocols in data networks"
      ]
    },
    {
      title: "OSI Model",
      description: "Detailed examination of the OSI model and its layers.",
      artifacts: [
        "Discussion on transport layer's functions within the OSI model",
        "Analysis of Application layer services in the context of the OSI model"
      ]
    },
    {
      title: "TCP/IP and Ethernet Standards",
      description: "In-depth study of TCP/IP protocol suite and Ethernet standards.",
      artifacts: [
        "Comparison of TCP/IP routing to physical routing systems"
      ]
    }
  ];

  const blogPosts = [
    {
      title: "Starting My Journey in Data Communications",
      date: "2024-09-01",
      content: `As I begin this course in Data Communications, I'm excited about the opportunity to delve into the world of networking and data transfer. While I don't have specific achievements to report yet, I'm looking forward to gaining a deeper understanding of how modern communication systems work.

      Initial thoughts:
      1. The scope of data communications seems vast and complex
      2. I'm particularly interested in learning about network security
      3. The historical context of how data communication has evolved intrigues me`
    },
    {
      title: "Exploring Career Opportunities in Data Communications",
      date: "2024-09-15",
      content: `This week, I researched potential career paths in the field of data communications. I identified five companies I'd like to work for after graduation and explored various job titles and their qualifications.`
    }
  ];

  return (
    <div className="PageContainer">
      <section id="cover" className="SectionContainer">
        <h1 className="text-4xl font-bold">Alton Simpson's Portfolio</h1>
        
        <Card className="CardContainer">
          <CardContent>
            <p><strong>Name:</strong> Alton Simpson</p>
            <p><strong>Class:</strong> LIS 4482 - Data Communications</p>
            <p><strong>Date of submission:</strong> November 18, 2024</p>
            <p><strong>Grade I think I have earned:</strong> B</p>
          </CardContent>
        </Card>

        <Card className='CardContainer'>
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This portfolio showcases my journey through the LIS 4482 Data Communications course. As I progress, I'm developing a deeper understanding of networking concepts, protocols, and their real-world applications.</p>
            
            <h3 className="font-semibold mt-4 mb-2">Progress Overview:</h3>
            <ul className="list-disc pl-5">
              <li>Student Learning Outcomes: 5 in progress with multiple artifacts, 1 not yet started</li>
              <li>Course Objectives: 4 in progress with various artifacts, 1 not yet started</li>
              <li>Course Topics: Explored a wide range of topics including network types, VLANs, routing and transport, and application layer services</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="learning-outcomes" className="SectionContainer">
        <h2 className="text-3xl font-bold">Student Learning Outcomes</h2>
        <div className='CardContainer'>
          {outcomes.map((outcome, index) => (
            <Card key={index} className='Card'>
              <CardHeader>
                <CardTitle>{outcome.title}</CardTitle>
                <CardDescription>
                  Status: <Badge variant={outcome.status === "completed" ? "default" : outcome.status === "in progress" ? "secondary" : "outline"}>{outcome.status}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Artifacts:</h3>
                {outcome.artifacts.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {outcome.artifacts.map((artifact, i) => (
                      <li key={i}>{artifact}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No artifacts yet. As I progress through the course, I will add relevant projects, assignments, and demonstrations of my learning here.</p>
                )}
                <h3 className="font-semibold mt-4 mb-2">Demonstration of Skill:</h3>
                <Badge variant={outcome.demonstration === "excellent" ? "default" : outcome.demonstration === "good" ? "secondary" : "outline"}>{outcome.demonstration}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="course-objectives" className="SectionContainer">
        <h2 className="text-3xl font-bold">Course Objectives</h2>
        <div className='CardContainer'>
          {objectives.map((objective, index) => (
            <Card key={index} className='Card'>
              <CardHeader>
                <CardTitle>{objective.title}</CardTitle>
                <CardDescription>
                  Status: <Badge variant={objective.status === "completed" ? "default" : objective.status === "in progress" ? "secondary" : "outline"}>{objective.status}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Artifacts:</h3>
                {objective.artifacts.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {objective.artifacts.map((artifact, i) => (
                      <li key={i}>{artifact}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No artifacts yet. I look forward to adding projects and assignments that demonstrate my progress towards this objective as the course continues.</p>
                )}
                <h3 className="font-semibold mt-4 mb-2">Demonstration of Skill:</h3>
                <Badge variant={objective.demonstration === "excellent" ? "default" : objective.demonstration === "good" ? "secondary" : "outline"}>{objective.demonstration}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="course-topics" className="SectionContainer">
        <h2 className="text-3xl font-bold">Course Topics</h2>
        <div className='CardContainer'>
          {topics.map((topic, index) => (
            <Card key={index} className='Card'>
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Artifacts:</h3>
                {topic.artifacts.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {topic.artifacts.map((artifact, i) => (
                      <li key={i}>{artifact}</li>
                    ))}
                  </ul>
                ) : (
                  <p>As I delve deeper into this topic, I will add relevant projects, assignments, and reflections here to showcase my learning and application of key concepts.</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="blog" className="SectionContainer">
        <h2 className="text-3xl font-bold">Course Progress Blog</h2>
        <div className="CardContainer">
          {blogPosts.map((post, index) => (
            <Card key={index} className='Card'>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App
