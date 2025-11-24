import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dễ sử dụng cho giảng viên',
    Svg: require('@site/static/img/svg/GV.svg').default,
    description: (
      <>
        Giao diện trực quan, thao tác đơn giản giúp giảng viên dễ dàng tạo giáo án, theo dõi tiến độ học tập và tương tác với sinh viên mà không cần kỹ năng công nghệ chuyên sâu.
      </>
    ),
    link: '/docs/trogiang/teacher',
  },

  {
    title: 'Tập trung hỗ trợ học tập cho sinh viên',
    Svg: require('@site/static/img/svg/SV.svg').default,
    description: (
      <>
        Trợ giảng AI phân tích dữ liệu học tập để đưa ra gợi ý, phản hồi và điều chỉnh nội dung giảng dạy phù hợp với từng sinh viên, giúp cá nhân hóa quá trình học tập.
      </>
    ),
    link: '/docs/trogiang/sinhvien',
  },
  {
    title: 'Tích hợp công nghệ AI hiện đại',
    Svg: require('@site/static/img/svg/AI.svg').default,
    description: (
      <>
        Ứng dụng trí tuệ nhân tạo trong xử lý ngôn ngữ, phân tích dữ liệu và hỗ trợ ra quyết định, Trợ giảng AI mang đến một trải nghiệm học tập và giảng dạy hiệu quả, thông minh và linh hoạt.
      </>
    ),
    link: '/docs/trogiang/admin',
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.features} style={{ marginTop: '2rem' }}>
        <div className="container text--center">
          <Heading as="h2">Video giới thiệu chức năng Bài Giảng AI</Heading>
          <div className="margin-top--md">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/Df2m_G_ragg"
              title="Video giới thiệu chức năng Bài Giảng AI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}