import { ReactComponent as InfoProductHubLogo } from './images/hub.svg';
import { ReactComponent as NotebooksLogo } from './images/notebooks.svg';
import { ReactComponent as AnswerFactoryLogo } from './images/answerfactory.svg';
import { ReactComponent as UniversityLogo } from './images/university.svg';

const applications = [
  {
    title: 'Info Product Hub',
    svg: InfoProductHubLogo,
    copy: `Find, explore and download vector datasets.`,
    link: 'https://hub.geobigdata.io'
  },
  {
    title: 'Notebooks',
    svg: NotebooksLogo,
    copy: `Interact with live code Jupyter notebooks and use GPUs to process imagery.`,
    link: 'https://notebooks.geobigdata.io'
  },
  {
    title: 'Answer Factory',
    svg: AnswerFactoryLogo,
    copy: `Explore satellite imagery and build insights from powerful machine learning tools.`,
    link: 'https://vector.geobigdata.io/answer-factory/login'
  },
  {
    title: 'GBDX University',
    svg: UniversityLogo,
    copy: `Learn more at GBDX University.`,
    link: 'https://gbdxdocs.digitalglobe.com'
  }
]

export { applications };
