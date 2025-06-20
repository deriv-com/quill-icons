import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 7c-.562 0-1 .469-1 1v8c0 .563.438 1 1 1h8c.531 0 1-.437 1-1V8c0-.531-.469-1-1-1zM0 8c0-1.094.875-2 2-2h8c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm16.219 8.875L13 15.094v-1.156L16.688 16c.03 0 .062.031.093.031a.214.214 0 0 0 .219-.218V8.218A.214.214 0 0 0 16.781 8c-.031 0-.062.031-.093.031L13 10.094V8.938l3.219-1.782c.187-.093.375-.156.562-.156C17.438 7 18 7.563 18 8.219v7.594c0 .656-.562 1.187-1.219 1.187-.187 0-.375-.031-.562-.125' />
    </g>
    <defs>
      <clipPath id='5b90effc5a0274acc5951db28c199449__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoMdRegularIcon);
export default ForwardRef;
