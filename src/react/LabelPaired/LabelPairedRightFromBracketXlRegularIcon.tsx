import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketXlRegularIcon = (
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
      <path d='m22.453 17.906-6.187-5.812Q16.172 12 16.078 12a.366.366 0 0 0-.328.328V15q-.047.703-.75.75H9.375q-.328.047-.375.375v3.75q.047.329.375.375H15q.703.046.75.75v2.672q.046.281.328.328.094 0 .188-.094l6.187-5.812q.047-.048.047-.094t-.047-.094M24 18q0 .704-.516 1.172l-6.187 5.86q-.516.468-1.219.468-.797 0-1.312-.516-.516-.514-.516-1.312V21.75H9.375q-.797 0-1.312-.562-.564-.516-.563-1.313v-3.75q0-.797.563-1.312.514-.563 1.312-.563h4.875v-1.922q0-.797.516-1.312.514-.516 1.312-.516.703 0 1.219.516l6.187 5.812Q24 17.297 24 18M8.25 9h-4.5a2.45 2.45 0 0 0-1.594.656A2.45 2.45 0 0 0 1.5 11.25v13.5q.047.937.656 1.594.657.61 1.594.656h4.5q.703.046.75.75-.047.704-.75.75h-4.5q-1.593-.046-2.672-1.078Q.047 26.343 0 24.75v-13.5q.046-1.593 1.078-2.672Q2.157 7.547 3.75 7.5h4.5q.703.046.75.75-.047.703-.75.75' />
    </g>
    <defs>
      <clipPath id='c22fac2383dee1381b97ee60b4e752a7__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketXlRegularIcon);
export default ForwardRef;
