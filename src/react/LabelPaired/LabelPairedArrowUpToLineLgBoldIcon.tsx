import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.938 6.75h13.125q.858.078.937.938-.079.858-.937.937H.938Q.078 8.547 0 7.688q.078-.86.938-.938m7.265 5.313h-.039l5 5.312q.548.664-.039 1.29-.664.546-1.29-.04L8.438 15.07v8.242q-.078.86-.937.938-.86-.079-.937-.937V15.07l-3.399 3.594q-.625.547-1.289.04-.585-.665-.04-1.329l5-5.312a.85.85 0 0 1 .665-.313q.39 0 .703.313' />
    </g>
    <defs>
      <clipPath id='f3f095995d8db0048a848ff59a8150d0__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineLgBoldIcon);
export default ForwardRef;
