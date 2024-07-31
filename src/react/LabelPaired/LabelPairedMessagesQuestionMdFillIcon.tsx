import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionMdFillIcon = (
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
      <path d='M0 6c0-1.094.875-2 2-2h9c1.094 0 2 .906 2 2v6c0 1.125-.906 2-2 2H6.313L3.78 15.906c-.156.125-.344.125-.531.063A.51.51 0 0 1 3 15.5V14H2c-1.125 0-2-.875-2-2zm8 9h3a3 3 0 0 0 3-3V8h4c1.094 0 2 .906 2 2v6c0 1.125-.906 2-2 2h-1v1.5a.54.54 0 0 1-.281.469c-.188.062-.375.062-.532-.063L13.658 18H10c-1.125 0-2-.875-2-2zM4.25 6.906l-.031.032c-.094.312.062.687.406.78.313.126.656-.03.781-.374v-.032c.032-.093.125-.125.219-.125h1.5c.219 0 .406.157.406.375a.42.42 0 0 1-.187.344l-1.157.688c-.218.094-.312.312-.312.531v.344c0 .344.281.625.625.625.313 0 .594-.281.625-.625L7.938 9c.53-.281.843-.844.843-1.437 0-.907-.75-1.625-1.656-1.625h-1.5c-.625 0-1.187.375-1.375.968m3.063 4.844a.79.79 0 0 0-.407-.75.82.82 0 0 0-.843 0 .79.79 0 0 0-.407.75.8.8 0 0 0 .407.781c.25.156.593.156.843 0a.8.8 0 0 0 .407-.781' />
    </g>
    <defs>
      <clipPath id='1e72f520b89c407cc8d7aeaa576d78a0__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionMdFillIcon);
export default ForwardRef;
