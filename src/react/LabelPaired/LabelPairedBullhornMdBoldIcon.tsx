import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornMdBoldIcon = (
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
      <path d='m13.5 6.313-.344.343a10.2 10.2 0 0 1-3.062 2.063A9.9 9.9 0 0 1 6.5 9.5v4a9.9 9.9 0 0 1 3.594.781q1.718.75 3.062 2.063l.344.343zM5 8h1.281a8.164 8.164 0 0 0 5.813-2.406l1.187-1.188q.531-.468 1.094-.218.562.218.625.906v4.531q.438.219.719.719T16 11.5t-.281 1.156-.719.719v4.531q-.063.688-.625.907-.563.25-1.094-.22l-1.187-1.187a8.3 8.3 0 0 0-2.563-1.75A8.8 8.8 0 0 0 6.5 15v3.25Q6.47 19 6 19.5q-.5.47-1.25.5h-1q-.75-.03-1.25-.5-.469-.5-.5-1.25V15q-.843-.03-1.406-.594Q.032 13.843 0 13v-3q.03-.843.594-1.406Q1.157 8.032 2 8zm-1.5 7v3.25q.03.22.25.25h1q.22-.03.25-.25V15zM2 9.5q-.469.031-.5.5v3q.031.47.5.5h3v-4z' />
    </g>
    <defs>
      <clipPath id='87bb8f4c88135f485804e0d515f6bdfd__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornMdBoldIcon);
export default ForwardRef;
