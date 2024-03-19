import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashMdRegularIcon = (
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
      <path d='m.781 4.125 19.032 15c.187.156.25.5.062.688a.467.467 0 0 1-.687.093l-19-15c-.22-.156-.282-.5-.094-.687.156-.219.5-.282.687-.094m18.125 8.281c-.312.75-.875 1.781-1.687 2.781l-.782-.624c.75-.938 1.25-1.844 1.563-2.563-.437-1-1.344-2.5-2.687-3.75C13.969 7 12.187 6 10 6c-1.25 0-2.375.344-3.344.844l-.843-.688C7 5.47 8.375 5 10 5c2.5 0 4.531 1.156 6 2.531 1.469 1.344 2.438 2.969 2.906 4.094.094.25.094.531 0 .781M2.75 8.844l.781.625A10 10 0 0 0 2 12c.406 1 1.313 2.5 2.656 3.75S7.781 18 10 18a7.2 7.2 0 0 0 3.313-.812l.843.687A8.1 8.1 0 0 1 10 19c-2.531 0-4.562-1.125-6.031-2.5s-2.438-3-2.906-4.094a1.12 1.12 0 0 1 0-.781c.312-.75.875-1.781 1.687-2.781M10 16c-2.219 0-4-1.781-4-4 0-.187 0-.375.031-.562l.969.75A2.986 2.986 0 0 0 10 15c.156 0 .344 0 .5-.031l.969.75A4 4 0 0 1 10 16m4-4v.031c0 .188-.031.375-.062.563l-.97-.75A2.957 2.957 0 0 0 10 9.03c-.187 0-.375 0-.531.031l-.969-.75A4 4 0 0 1 10 8c2.188 0 4 1.813 4 4' />
    </g>
    <defs>
      <clipPath id='b108b2dd1ee5dbdaba1db49728c9ec6c__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashMdRegularIcon);
export default ForwardRef;
