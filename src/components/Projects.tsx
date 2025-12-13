import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github, Code, Brain, BarChart3, Smartphone, FolderOpen } from 'lucide-react';

export default function Projects() {
const projects = {
    software: [
      {
        title: 'CriandoSonhosLTDA',
        description: 'Sistema completo para manutenção e gerenciamento de processos empresariais com interface moderna e funcionalidades avançadas.',
        technologies: ['Python', 'Flask', 'SQLAlchemy'],
        github: 'https://github.com/RafaelFreitas1009/CriandoSonhosLTDA',
        type: 'Desenvolvimento de Software'
      },
      {
        title: 'Gerenciador de Tarefas',
        description: 'Aplicação web para organização e acompanhamento de tarefas pessoais e profissionais com interface intuitiva.',
        technologies: ['Python', 'Streamlit'],
        github: 'https://github.com/RafaelFreitas1009/Gerenciador_De_Tarefas',
        type: 'Desenvolvimento de Software'
      },
      {
        title: 'Vigilante-IA',
        description: 'Sistema inteligente de monitoramento e vigilância utilizando tecnologias de visão computacional e IA.',
        technologies: ['TypeScript', 'React', 'OpenCV', 'TensorFlow'],
        github: 'https://github.com/RafaelFreitas1009/Vigilante-IA',
        type: 'Inteligência Artificial'
      }
    ],
    datascience: [
      {
        title: 'Inteligência Artificial Generativa',
        description: 'Projeto de IA generativa utilizando técnicas avançadas para criação de conteúdo automatizado.',
        technologies: ['Python', 'Gemini', 'Artificial Intelligence'],
        github: 'https://github.com/RafaelFreitas1009/Inteligencia_Artificial',
        type: 'Artificial Intelligence'
      },
      {
        title: 'Machine Learning Project California Housing Prices Dataset',
        description: 'Coleção de projetos de machine learning abordando diferentes algoritmos e técnicas de análise preditiva.',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
        github: 'https://github.com/RafaelFreitas1009/ML',
        type: 'Machine Learning'
      },
      {
        title: 'Machine Learning Online Retail Dataset',
        description: 'Projeto de análise de clientes e previsão de vendas utilizando o conjunto de dados Online Retail.',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib','K-Means Clustering','StandardScaler'],
        github: 'https://github.com/RafaelFreitas1009/OnlineRetailData',
        type: 'Machine Learning'
      },
      {
        title: 'ML Aprendizado por Reforço',
        description: 'Implementação de algoritmos de reinforcement learning para solução de problemas complexos de otimização.',
        technologies: ['Python', 'Algoritsmos', 'NumPy'],
        github: 'https://github.com/RafaelFreitas1009/ML_Aprendizado_Refor-o',
        type: 'Reinforcement Learning'
      },
      {
        title: 'Web Scraping',
        description: 'Ferramentas e scripts para coleta automatizada de dados de diversas fontes web para análise posterior.',
        technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas'],
        github: 'https://github.com/RafaelFreitas1009/Web-scraping',
        type: 'Data Collection'
      }
    ],
    powerbi: [
      {
        title: 'Dashboard De Perfomance | Análise de Vendas Toy&Play',
        description: 'Dashboard prático e funcional que entrega insights valiosos com rapidez, análises dinâmicas para reduzir custos, análise de sazonalidade do faturamento e estratégias de vendas.',
        technologies: ['Power BI', 'DAX', 'Power Query', 'Modeling'],
        live: 'https://app.powerbi.com/view?r=eyJrIjoiMTkzMzlkYzEtMjZkNC00NTQ1LWE4MzktZjg0ODIwODhmYWYyIiwidCI6ImRkM2YyODY3LTA1N2EtNDdmNi05ZThiLTlmMDM2YTQ5NjYzOCJ9',
        type: 'Business Intelligence'
      },
      {
        title: 'Dashboard De Perfomance | Análise de Vendas',
        description: 'Dashboard para Vertex Tennis com insights profundos para tomada de decisões baseadas em dados, identificação de oportunidades de expansão e análises estratégicas.',
        technologies: ['Power BI', 'DAX', 'Power Query', 'Analytics'],
        live: 'https://app.powerbi.com/view?r=eyJrIjoiNjhmYjFhNGEtYjZkZC00NzRkLTlhZTktMTY2MzI1MjFmM2ZmIiwidCI6IjliMzcwYzNlLTVhYWEtNGRiYS05NDdiLWM2OWFkMzE0Mzk2NiJ9',
        type: 'Business Intelligence'
      },
      {
        title: 'Dashboard De Perfomance de Atendimento | HEALTHLAB',
        description: 'Dashboard para análise rápida e abrangente do desempenho de atendimento do laboratório, alinhando às metas de faturamento mensal e número de atendimentos.',
        technologies: ['Power BI', 'DAX', 'Power Query', 'Analytics'],
        live: 'https://app.powerbi.com/view?r=eyJrIjoiNWEzMmJhN2UtMDVjNC00ZjY2LTkxZGQtMmU3NTVjNGE3NGEzIiwidCI6IjliMzcwYzNlLTVhYWEtNGRiYS05NDdiLWM2OWFkMzE0Mzk2NiJ9',
        type: 'Business Intelligence'
      },
      {
        title: 'Dashboard Metalurgica de Produção',
        description: 'Dashboard para análise abrangente do desempenho produtivo de atendimento de uma indústria, fazendo análises bimestrais e análises What-If para compreensão de ROIs e criação de cenários',
        technologies: ['Power BI', 'DAX', 'Power Query', 'Modeling'],
        live: 'https://app.powerbi.com/view?r=eyJrIjoiOTY3YTEwMWEtNDZjZC00MjQzLWE2OTYtMDNmYTI4YzEzNmE0IiwidCI6IjliMzcwYzNlLTVhYWEtNGRiYS05NDdiLWM2OWFkMzE0Mzk2NiJ9',
        type: 'Business Intelligence'
      },
      {
        title: 'E-commerce | Olist',
        description: 'Dashboard para análise abrangente do desempenho de uma e-commerce, trabalhando com análise de pagamentos e faturamentos, logística e análises de clientes analisando indicadores como: RFM e NPS).',
        technologies: ['Power BI', 'DAX', 'Power Query', 'SQL'],
        live: 'https://app.powerbi.com/view?r=eyJrIjoiMTg2NTQ1OTgtYjI5Yy00ZjcxLWFjZWQtODNhN2NmMmNmZTg3IiwidCI6IjliMzcwYzNlLTVhYWEtNGRiYS05NDdiLWM2OWFkMzE0Mzk2NiJ9',
        type: 'Business Intelligence'
      }
    ]
  };

  const categories = [
    {
      id: 'all',
      label: 'Todos os Projetos',
      icon: FolderOpen,
      description: 'Visualizar todos os projetos'
    },
    {
      id: 'software',
      label: 'Desenvolvimento de Software',
      icon: Code,
      description: 'Aplicações web e sistemas'
    },
    {
      id: 'datascience',
      label: 'Ciência de Dados',
      icon: Brain,
      description: 'Machine Learning e IA'
    },
    {
      id: 'powerbi',
      label: 'Dashboards Power BI',
      icon: BarChart3,
      description: 'Visualizações e relatórios'
    },
    {
      id: 'mobile',
      label: 'Aplicativos Mobile',
      icon: Smartphone,
      description: 'Apps iOS e Android'
    }
  ];

  const allProjects = [...projects.software, ...projects.datascience, ...projects.powerbi];

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="group shadow-portfolio hover:shadow-portfolio-glow transition-all duration-300 hover:scale-105">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-portfolio-primary transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">
              {project.description}
            </CardDescription>
          </div>
          <Badge variant="outline" className="ml-2 text-xs">
            {project.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Technologies */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">🧪 Tecnologias:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-2 pt-2">
            {project.github && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
            {project.live && (
              <Button size="sm" asChild>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  {project.github ? 'Demo' : 'Visualizar Dashboard'}
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meus Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus principais projetos organizados por categoria e tecnologia
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          {/* Categories */}
          <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full mb-12 h-auto p-1">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-portfolio-primary data-[state=active]:text-white"
              >
                <category.icon className="h-5 w-5" />
                <span className="text-xs font-medium text-center leading-tight">
                  {category.label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* All Projects */}
          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          {/* Software Development */}
          <TabsContent value="software" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                📘 Projetos de Desenvolvimento de Software
              </h3>
              <p className="text-muted-foreground">
                Aplicações web, sistemas e ferramentas desenvolvidas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.software.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          {/* Data Science */}
          <TabsContent value="datascience" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                📊 Projetos de Ciência de Dados
              </h3>
              <p className="text-muted-foreground">
                Machine Learning, análise de dados e inteligência artificial
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.datascience.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          {/* Power BI */}
          <TabsContent value="powerbi" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                📊 Dashboards Power BI
              </h3>
              <p className="text-muted-foreground">
                Dashboards e relatórios interativos para Business Intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.powerbi.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          {/* Mobile Apps - Placeholder */}
          <TabsContent value="mobile" className="space-y-8">
            <div className="text-center py-16">
              <Smartphone className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                📱 Aplicativos Mobile
              </h3>
              <p className="text-muted-foreground mb-6">
                Em breve! Aplicativos mobile serão desenvolvidos e publicados aqui.
              </p>
              <Badge variant="outline">Em Desenvolvimento</Badge>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="shadow-portfolio bg-portfolio-gradient text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Quer colaborar em um projeto?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Estou sempre em busca de novas oportunidades e colaborações em projetos inovadores de
                ciência de dados, machine learning e desenvolvimento de software.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-portfolio-primary hover:bg-white/90"
                asChild
              >
                <a href="mailto:rafaelfreitas1009@gmail.com">
                  Entre em Contato
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}