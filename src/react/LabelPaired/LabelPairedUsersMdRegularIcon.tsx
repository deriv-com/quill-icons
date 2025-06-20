import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersMdRegularIcon = (
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
      <path d='M3 6.5c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0C5.688 7.53 6 7.063 6 6.5c0-.531-.312-1-.75-1.281-.469-.282-1.062-.282-1.5 0C3.281 5.5 3 5.969 3 6.5m4 0c0 .906-.5 1.719-1.25 2.188-.781.437-1.75.437-2.5 0A2.53 2.53 0 0 1 2 6.5c0-.875.469-1.687 1.25-2.156.75-.438 1.719-.438 2.5 0C6.5 4.812 7 5.625 7 6.5M10 9c-.719 0-1.375.406-1.75 1-.344.625-.344 1.406 0 2 .375.625 1.031 1 1.75 1a2.02 2.02 0 0 0 1.719-1c.344-.594.344-1.375 0-2-.375-.594-1.031-1-1.719-1m0 5a3.03 3.03 0 0 1-2.625-1.5c-.531-.906-.531-2.062 0-3C7.938 8.594 8.906 8 10 8c1.063 0 2.031.594 2.594 1.5.531.938.531 2.094 0 3-.563.938-1.531 1.5-2.594 1.5m-1.844 2C6.47 16 5.062 17.344 5 19h9.969c-.063-1.656-1.469-3-3.156-3zm0-1h3.656A4.19 4.19 0 0 1 16 19.188c0 .468-.375.812-.844.812H4.813A.807.807 0 0 1 4 19.188C4 16.875 5.844 15 8.156 15M16 5c-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75.531 0 1-.281 1.281-.75.282-.437.282-1.031 0-1.5C17 5.313 16.531 5 16 5m0 4a2.53 2.53 0 0 1-2.187-1.25c-.438-.75-.438-1.719 0-2.5C14.28 4.5 15.093 4 16 4c.875 0 1.688.5 2.156 1.25.438.781.438 1.75 0 2.5C17.688 8.531 16.875 9 16 9m.5 2H14c0-.344-.062-.656-.125-1H16.5c1.906 0 3.5 1.594 3.5 3.5 0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5c0-1.375-1.125-2.5-2.5-2.5M6 11H3.5A2.487 2.487 0 0 0 1 13.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5C0 11.594 1.563 10 3.5 10h2.625A3.7 3.7 0 0 0 6 11' />
    </g>
    <defs>
      <clipPath id='b1d1911a80b26f8495abd2415800750a__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersMdRegularIcon);
export default ForwardRef;
