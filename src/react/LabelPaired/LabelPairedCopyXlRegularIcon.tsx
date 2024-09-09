import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18 22.5c.797 0 1.5-.656 1.5-1.5v-9.562a.75.75 0 0 0-.234-.516l-3.188-3.188a.75.75 0 0 0-.515-.234H10.5C9.656 7.5 9 8.203 9 9v12c0 .844.656 1.5 1.5 1.5zm2.297-12.656c.422.422.703 1.031.703 1.594V21c0 1.688-1.36 3-3 3h-7.5c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h5.063c.562 0 1.171.281 1.593.703zM3 12h3v1.5H3c-.844 0-1.5.703-1.5 1.5v12c0 .844.656 1.5 1.5 1.5h7.5c.797 0 1.5-.656 1.5-1.5v-1.5h1.5V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V15c0-1.64 1.313-3 3-3' />
    </g>
    <defs>
      <clipPath id='34908871ba538eddaa70e09880ce904a__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyXlRegularIcon);
export default ForwardRef;
