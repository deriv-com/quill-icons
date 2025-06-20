import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 18.5c.219 0 .844-.219 1.469-1.5a7.9 7.9 0 0 0 .687-2H5.812c.188.781.407 1.438.688 2 .656 1.281 1.25 1.5 1.5 1.5m-2.437-5h4.843q.094-.703.094-1.5 0-.75-.094-1.5H5.562C5.5 11 5.5 11.5 5.5 12c0 .531 0 1.031.063 1.5m.25-4.5h4.343a8 8 0 0 0-.687-1.969C8.844 5.75 8.219 5.5 8 5.5c-.25 0-.844.25-1.5 1.531C6.219 7.594 6 8.25 5.813 9m6.093 1.5c.063.5.063 1 .063 1.5 0 .531 0 1.031-.063 1.5h2.406q.188-.703.188-1.5 0-.75-.187-1.5zM13.75 9a6.43 6.43 0 0 0-3.062-2.906c.437.812.78 1.812 1 2.906zM4.281 9c.219-1.094.563-2.094 1-2.906A6.43 6.43 0 0 0 2.22 9zm-2.625 1.5c-.093.5-.156 1-.156 1.5 0 .531.031 1.031.156 1.5h2.407C4 13.031 4 12.531 4 12c0-.5 0-1 .063-1.5zm9.032 7.438A6.35 6.35 0 0 0 13.75 15h-2.062c-.22 1.125-.563 2.125-1 2.938m-5.407 0c-.437-.813-.781-1.813-1-2.938H2.22a6.35 6.35 0 0 0 3.062 2.938M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20' />
    </g>
    <defs>
      <clipPath id='1b975e52fd4b1f53af3f526da35396d0__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeMdBoldIcon);
export default ForwardRef;
