import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownMdRegularIcon = (
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
      <path d='M9 17.469a.78.78 0 0 0 .938.531.78.78 0 0 0 .53-.937l-.155-.5a5.7 5.7 0 0 0-.782-1.782.48.48 0 0 1 0-.5A.47.47 0 0 1 9.97 14H14c.531 0 1-.437 1-1 0-.344-.187-.656-.469-.844-.219-.125-.312-.437-.187-.656a.95.95 0 0 0 .156-.5.96.96 0 0 0-.562-.875.48.48 0 0 1-.25-.344.47.47 0 0 1 .093-.406C13.906 9.188 14 9 14 8.75c0-.437-.312-.812-.687-.937-.25-.094-.407-.344-.344-.594 0-.063.031-.125.031-.219 0-.531-.469-1-1-1H9.188c-.5 0-.97.156-1.376.438l-1.218.812c-.282.188-.5.406-.688.688a.48.48 0 0 1-.687.156.48.48 0 0 1-.157-.688c.25-.406.594-.75.97-1l1.218-.812A3.54 3.54 0 0 1 9.188 5H12c1.094 0 2 .906 2 2v.031c.594.344 1 1 1 1.719 0 .281-.062.563-.156.781.375.375.656.906.656 1.469 0 .219-.031.406-.094.594.344.375.594.875.594 1.406 0 1.125-.906 2-2 2h-3.187c.187.438.343.844.468 1.281l.156.532c.25.937-.312 1.875-1.25 2.156-.937.25-1.874-.313-2.156-1.25l-.125-.5a4.28 4.28 0 0 0-1.812-2.469L6 14.688l.25-.407-.25.406a3.6 3.6 0 0 1-.937-.874.53.53 0 0 1 .125-.72.5.5 0 0 1 .687.126c.188.25.406.469.656.625l.094.062a5.24 5.24 0 0 1 2.25 3.031zM1 15h2V8H1zm-1 0V8c0-.531.438-1 1-1h2c.531 0 1 .469 1 1v7c0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1' />
    </g>
    <defs>
      <clipPath id='b726cd0c340d8b7ff61c94ac8edcc39e__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownMdRegularIcon);
export default ForwardRef;
