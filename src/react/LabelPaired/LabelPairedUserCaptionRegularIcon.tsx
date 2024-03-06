import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.75 6.5q0-.609-.305-1.125A2.255 2.255 0 0 0 5.5 4.25a2.26 2.26 0 0 0-1.945 1.125A2.17 2.17 0 0 0 3.25 6.5q0 .609.305 1.125.304.516.82.82.54.305 1.125.305a2.26 2.26 0 0 0 1.945-1.125q.305-.516.305-1.125m-5.25 0q0-.82.398-1.5A3.1 3.1 0 0 1 4 3.898 3 3 0 0 1 5.5 3.5q.797 0 1.5.398A3.1 3.1 0 0 1 8.102 5q.398.68.398 1.5T8.102 8A3.1 3.1 0 0 1 7 9.102a3 3 0 0 1-1.5.398A3 3 0 0 1 4 9.102 3.1 3.1 0 0 1 2.898 8 2.9 2.9 0 0 1 2.5 6.5M1 14.75h9q-.047-1.43-1.031-2.39-.961-.939-2.39-.985H4.421q-1.43.047-2.39.984-.985.962-1.032 2.391m-.75.047q.047-1.758 1.219-2.953 1.195-1.172 2.953-1.219h2.156q1.758.047 2.953 1.219 1.172 1.195 1.219 2.953 0 .305-.21.492a.63.63 0 0 1-.493.211H.953a.63.63 0 0 1-.492-.21.63.63 0 0 1-.211-.493' />
    </g>
    <defs>
      <clipPath id='f1872188f31884df2bffef9203813224__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCaptionRegularIcon);
export default ForwardRef;
