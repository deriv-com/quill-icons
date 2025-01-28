import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 11.75c0 .547-.43.938-.937.938-.547 0-.938-.391-.938-.938 0-2.734 2.227-5 4.96-4.96h1.25c2.774 0 5 2.226 5 5v.155c0 1.563-.78 3.047-2.07 3.907l-2.03 1.367a1.23 1.23 0 0 0-.548 1.015v.078c0 .547-.43.938-.937.938-.547 0-.937-.39-.937-.937v-.079c0-1.015.507-1.992 1.367-2.578l2.03-1.367a2.75 2.75 0 0 0 1.29-2.344v-.195a3.134 3.134 0 0 0-3.125-3.125h-1.25A3.11 3.11 0 0 0 2.75 11.75m3.75 12.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25' />
    </g>
    <defs>
      <clipPath id='7d4cf917b3407822b29b2079c7222f48__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionLgBoldIcon);
export default ForwardRef;
