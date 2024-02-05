import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 7.5q-2.859.047-5.25 1.406-2.39 1.407-3.844 3.844Q1.5 15.234 1.5 18t1.406 5.25q1.453 2.437 3.844 3.844Q9.141 28.454 12 28.5q2.859-.047 5.25-1.406 2.39-1.407 3.844-3.844Q22.5 20.766 22.5 18t-1.406-5.25q-1.453-2.437-3.844-3.844Q14.859 7.546 12 7.5M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m.656-18.703 1.735 3.422 3.797.562q.42.095.609.516.093.422-.188.797l-2.765 2.672.656 3.75a.78.78 0 0 1-.328.75q-.375.234-.75.047L12 22.03l-3.375 1.782a.8.8 0 0 1-.797-.047.78.78 0 0 1-.328-.75l.656-3.75-2.719-2.72q-.327-.327-.187-.75a.73.73 0 0 1 .563-.515l3.796-.562 1.735-3.422q.188-.422.656-.422t.656.422m-1.875 4.453a.86.86 0 0 1-.562.422l-2.672.375 1.922 1.922a.76.76 0 0 1 .234.656l-.469 2.672 2.391-1.266q.375-.187.703 0l2.438 1.266-.47-2.672a.82.82 0 0 1 .188-.656l1.97-1.922-2.673-.375q-.422-.094-.562-.422L12 13.313z' />
    </g>
    <defs>
      <clipPath id='2db68132b247b671e55ec18c3e461b67__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarXlRegularIcon);
export default ForwardRef;
