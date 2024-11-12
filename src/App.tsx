import React from 'react';
import {
  Code2,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Brain,
  User,
  Code,
  Database,
  Globe,
  Gamepad2,
  Users,
  GitGraph,
  Binary,
  Network,
  Hash,
} from 'lucide-react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-8"></div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Sannidhya Jaiswal
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              Computer Science Student
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/Sannidhya05"
                className="hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/sannidhyajaiswal"
                className="hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:sj1530@srmist.edu.in"
                className="hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <p className="text-gray-400 text-sm"></p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="min-h-screen flex items-center bg-gray-800/50"
      >
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-center justify-center mb-8">
            <User className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate second-year Computer Science student at SRM
              Institute of Science and Technology, deeply fascinated by the
              world of algorithms and problem-solving. My journey in tech began
              with learning python as a kid, and I've since expanded into
              full-stack development and game development. When I'm not coding,
              you'll find me participating in hackathons or exploring new
              technologies to add to my toolkit.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-center justify-center mb-12">
            <Code className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Code2 className="w-6 h-6 text-blue-400 mr-2" />
                Programming Languages
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Java (Primary)</li>
                <li>• Python</li>
                <li>• C/C++</li>
                <li>• JavaScript/TypeScript</li>
              </ul>
            </div>
            <div className="bg-gray-700/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Globe className="w-6 h-6 text-blue-400 mr-2" />
                Web Technologies
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• HTML5 & CSS3</li>
                <li>• React.js</li>
                <li>• Node.js</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-gray-700/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Database className="w-6 h-6 text-blue-400 mr-2" />
                Tools & Technologies
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Git & GitHub</li>
                <li>• MySQL</li>
                <li>• MongoDB</li>
                <li>• VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DSA Skills Section */}
      <section
        id="dsa"
        className="min-h-screen flex items-center bg-gray-800/50"
      >
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            DSA Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <GitGraph className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-3">
                Linear Data Structures
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Linked Lists</li>
                <li>• Stacks</li>
                <li>• Queues</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <Binary className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-3">Tree Structures</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Binary Search Trees</li>
                <li>• AVL Trees</li>
                <li>• Heaps</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <Hash className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-3">Hashing</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Hash Tables</li>
                <li>• Collision Resolution</li>
                <li>• Hash Functions</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <Network className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-3">Graph Theory</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• DFS & BFS</li>
                <li>• Shortest Paths</li>
                <li>• MST Algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <Users className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-3">
                StudySync - Online Group Study Platform
              </h3>
              <p className="text-gray-300 mb-4">
                A collaborative platform for students to form study groups,
                share resources, and conduct virtual study sessions with
                features like real-time chat, document sharing, and session
                scheduling.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                  Socket.io
                </span>
              </div>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <Gamepad2 className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-3">GameHub Launcher</h3>
              <p className="text-gray-300 mb-4">
                A modern game launcher application featuring game library
                management, automatic updates, cloud saves, and social features.
                Supports multiple game platforms and includes a friend system.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                  Java
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                  JavaFX
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                  MySQL
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                  REST API
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center bg-gray-800/50"
      >
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto bg-gray-700/30 p-8 rounded-lg backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">sj1530@srmist.edu.in</p>
                </div>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-gray-300">sannidhyajaiswal</p>
                </div>
              </div>
              <div className="flex items-center">
                <Github className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-gray-300">Sannidhya05</p>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-300">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Sannidhya Jaiswal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
