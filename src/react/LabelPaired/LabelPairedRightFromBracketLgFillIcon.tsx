import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketLgFillIcon = (
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
      <path d='m14.727 9.64 4.804 4.805c.274.274.469.664.469 1.055 0 .43-.195.82-.469 1.094l-4.804 4.804c-.235.235-.586.352-.938.352a1.3 1.3 0 0 1-1.289-1.29V18h-5c-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25h5v-2.422c0-.703.586-1.328 1.29-1.328.35 0 .702.156.937.39M6.25 9.25h-2.5c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5C1.68 24.25 0 22.57 0 20.5v-10c0-2.07 1.68-3.75 3.75-3.75h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25' />
    </g>
    <defs>
      <clipPath id='ed659919f6deffba40e4dd51ddb7df4d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketLgFillIcon);
export default ForwardRef;
