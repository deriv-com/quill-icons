import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskXlRegularIcon = (
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
      <path d='M1.5 10.5v15c0 .844.656 1.5 1.5 1.5h15c.797 0 1.5-.656 1.5-1.5V14.016c0-.422-.187-.797-.469-1.078l-3.468-3.47c-.188-.187-.376-.28-.563-.374V13.5c0 .844-.703 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 3 13.5V9c-.844 0-1.5.703-1.5 1.5m3-1.5v4.5h9V9zM0 10.5c0-1.64 1.313-3 3-3h11.484c.797 0 1.547.328 2.11.89l3.515 3.516c.563.563.891 1.313.891 2.11V25.5c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zM12.75 21c0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C8.672 19.5 8.25 20.203 8.25 21c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969m-2.25-3.75c1.313 0 2.531.75 3.234 1.875.657 1.172.657 2.625 0 3.75-.703 1.172-1.921 1.875-3.234 1.875-1.36 0-2.578-.703-3.281-1.875-.657-1.125-.657-2.578 0-3.75C7.922 18 9.14 17.25 10.5 17.25' />
    </g>
    <defs>
      <clipPath id='0645ec37e6ff6833b37bdfb88150289b__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskXlRegularIcon);
export default ForwardRef;
