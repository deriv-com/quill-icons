import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGraduationCapMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 6.5c-.094 0-.156.031-.25.063L2.938 9l1.406.531c.156-.094.312-.156.468-.219l5-1.874a.51.51 0 0 1 .657.312.477.477 0 0 1-.313.625L5.75 10.031l4 1.438c.094.031.156.031.25.031.063 0 .156 0 .219-.031L17.03 9 10.22 6.563A.6.6 0 0 0 10 6.5M.469 9.719C.188 9.625 0 9.344 0 9c0-.312.188-.594.469-.687L9.25 5.156C9.469 5.063 9.719 5 10 5c.25 0 .5.063.719.156L19.5 8.313a.743.743 0 0 1 0 1.406l-8.781 3.156a1.9 1.9 0 0 1-.719.156c-.281 0-.531-.062-.75-.156l-5.312-1.906c-.844.75-1.376 1.781-1.438 2.937.188.438.313.875.406 1.313.188.844.344 2.062.063 3.406-.031.125-.094.25-.219.313a.54.54 0 0 1-.375.062l-2-.5A.48.48 0 0 1 0 18.188a.62.62 0 0 1 .094-.47c.25-.374.5-.78.687-1.187.375-.718.719-1.625.719-2.531v-.031c.031-1.281.563-2.469 1.406-3.375zm15.031 2.5.5 4.531c0 1.125-2.687 2.25-6 2.25-3.312 0-6-1.125-6-2.25l.469-4.531 1.437.531-.375 3.75c.125.125.375.25.75.406.907.344 2.219.594 3.719.594s2.813-.25 3.688-.594c.374-.156.624-.281.75-.406l-.376-3.75zm-.906 4.156v.031zm-9.219 0v.031z' />
    </g>
    <defs>
      <clipPath id='aacd7cbc5ca959aa12fa5c41d946a293__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGraduationCapMdBoldIcon);
export default ForwardRef;
