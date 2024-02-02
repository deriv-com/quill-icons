import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.5 5.75V7h5V5.75q-.03-.22-.25-.25h-4.5q-.22.03-.25.25M4 7V5.75q.031-.75.5-1.25.5-.469 1.25-.5h4.5q.75.031 1.25.5.47.5.5 1.25V7h2q.844.03 1.406.594Q15.97 8.156 16 9v8q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17V9q.03-.843.594-1.406Q1.157 7.032 2 7zm-2.5 6.5V17q.031.47.5.5h12q.47-.03.5-.5v-3.5H10v.5a.97.97 0 0 1-.281.719A.97.97 0 0 1 9 15H7a.97.97 0 0 1-.719-.281A.97.97 0 0 1 6 14v-.5zM6 12h8.5V9q-.03-.469-.5-.5H2q-.469.031-.5.5v3z' />
    </g>
    <defs>
      <clipPath id='15660f9407d9dce4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseMdBoldIcon);
export default ForwardRef;
