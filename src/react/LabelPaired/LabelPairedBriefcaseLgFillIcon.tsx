import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.188 7.375a.31.31 0 0 0-.313.313V9.25h6.25V7.688a.336.336 0 0 0-.312-.313zM5 7.688C5 6.516 5.977 5.5 7.188 5.5h5.625C13.984 5.5 15 6.516 15 7.688V9.25h2.5c1.367 0 2.5 1.133 2.5 2.5v3.75H0v-3.75c0-1.367 1.094-2.5 2.5-2.5H5zm15 9.062v5c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5v-5h7.5V18c0 .703.547 1.25 1.25 1.25h2.5c.664 0 1.25-.547 1.25-1.25v-1.25z' />
    </g>
    <defs>
      <clipPath id='7d3afa22aaf3a2ea9727fb27dc352c65__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseLgFillIcon);
export default ForwardRef;
