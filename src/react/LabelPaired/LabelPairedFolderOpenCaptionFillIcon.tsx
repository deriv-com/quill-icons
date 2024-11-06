import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.313 8.75.25 12.313V5.75c0-.82.656-1.5 1.5-1.5h2.742c.399 0 .774.164 1.055.445l.633.633c.28.281.656.422 1.054.422H10c.82 0 1.5.68 1.5 1.5V8H3.625c-.54 0-1.031.281-1.312.75m.656.375a.75.75 0 0 1 .656-.375H13c.258 0 .516.164.633.398a.72.72 0 0 1 0 .75l-2.625 4.5a.77.77 0 0 1-.633.352H1a.75.75 0 0 1-.656-.375.72.72 0 0 1 0-.75z' />
    </g>
    <defs>
      <clipPath id='991bf6d47d68f3ff3b5a9aa41f3732f2__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenCaptionFillIcon);
export default ForwardRef;
