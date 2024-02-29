import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9q-.656 0-1.078.422Q1.5 9.843 1.5 10.5v15q0 .657.422 1.078Q2.343 27 3 27h21q.657 0 1.078-.422.422-.421.422-1.078v-15q0-.656-.422-1.078Q24.657 9 24 9zm-3 1.5q.047-1.266.89-2.11.844-.843 2.11-.89h21q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11zm10.078 3.422 3.375 7.5q.188.656-.375 1.031-.656.187-1.031-.375L11.578 21H7.172l-.469 1.078q-.375.562-1.031.375-.609-.375-.375-1.031l3.375-7.5q.234-.422.703-.422.47 0 .703.422m-.703 2.156L7.828 19.5h3.094zm8.25 1.172q-1.079.047-1.64.938-.47.938 0 1.875.561.89 1.64.937 1.079-.047 1.64-.937.47-.937 0-1.875-.561-.891-1.64-.938m1.875-.937V14.25q.046-.703.75-.75.704.047.75.75v7.5q-.046.704-.75.75-.562-.047-.75-.562-.796.562-1.875.562-1.454-.047-2.39-.984-.939-.937-.985-2.391.047-1.454.984-2.39.938-.939 2.391-.985 1.079 0 1.875.563' />
    </g>
    <defs>
      <clipPath id='455f4ca983062092e37167bb088be8c3__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdXlRegularIcon);
export default ForwardRef;
