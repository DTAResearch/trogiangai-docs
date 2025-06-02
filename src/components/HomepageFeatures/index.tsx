import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dễ sử dụng cho giảng viên',
    Svg: require('@site/static/img/GV.svg').default,
    description: (
      <>
        Giao diện trực quan, thao tác đơn giản giúp giảng viên dễ dàng tạo giáo án, theo dõi tiến độ học tập và tương tác với sinh viên mà không cần kỹ năng công nghệ chuyên sâu.
      </>
    ),
  },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  {
    title: 'Tập trung hỗ trợ học tập cho sinh viên',
    Svg: require('@site/static/img/SV.svg').default,
    description: (
      <>
        Trợ giảng AI phân tích dữ liệu học tập để đưa ra gợi ý, phản hồi và điều chỉnh nội dung giảng dạy phù hợp với từng sinh viên, giúp cá nhân hóa quá trình học tập.
      </>
    ),
  },
  {
    title: 'Tích hợp công nghệ AI hiện đại',
    Svg: require('@site/static/img/AI.svg').default,
    description: (
      <>
        Ứng dụng trí tuệ nhân tạo trong xử lý ngôn ngữ, phân tích dữ liệu và hỗ trợ ra quyết định, Trợ giảng AI mang đến một trải nghiệm học tập và giảng dạy hiệu quả, thông minh và linh hoạt.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
