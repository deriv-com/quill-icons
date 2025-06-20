import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpXlFillIcon = (
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
      <path d='M14.672 7.547c1.219.281 2.015 1.453 1.781 2.672l-.14.515C16.078 12 15.609 13.172 15 14.25h6.75c1.219 0 2.25 1.031 2.25 2.25 0 .89-.516 1.64-1.219 2.016.516.422.844 1.03.844 1.734 0 1.125-.797 2.016-1.828 2.25.187.328.328.703.328 1.125a2.22 2.22 0 0 1-1.594 2.156c.047.14.094.328.094.469a2.25 2.25 0 0 1-2.25 2.25h-4.594c-.89 0-1.734-.234-2.484-.75l-1.828-1.172a4.58 4.58 0 0 1-1.969-3.75v-5.203c0-1.406.61-2.672 1.688-3.516l.328-.28c1.218-1.032 2.109-2.392 2.39-3.985L12 9.328c.281-1.219 1.453-2.015 2.672-1.781M1.5 15h3c.797 0 1.5.703 1.5 1.5V27c0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 0 27V16.5c0-.797.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='0647c193ae7ff40135ec775b5e221169__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpXlFillIcon);
export default ForwardRef;
