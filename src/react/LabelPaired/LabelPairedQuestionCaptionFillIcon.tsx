import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 7.25c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-1.64 1.336-3 3-3h.75c1.64 0 3 1.36 3 3v.094c0 1.031-.54 1.968-1.383 2.531l-.984.633a.54.54 0 0 0-.258.469V11c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-.023c0-.704.352-1.36.938-1.735l.984-.633c.422-.28.703-.75.703-1.265V7.25c0-.82-.68-1.5-1.5-1.5h-.75c-.844 0-1.5.68-1.5 1.5M4 14.75c-.352 0-.656-.164-.82-.469a.95.95 0 0 1 0-.937.95.95 0 0 1 .82-.469c.328 0 .633.188.797.469a.95.95 0 0 1 0 .937.89.89 0 0 1-.797.469' />
    </g>
    <defs>
      <clipPath id='a77cc94ddd88d5d10a016cbfdd644e3e__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionCaptionFillIcon);
export default ForwardRef;
