import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpMdBoldIcon = (
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
      <path d='M10.094 5.094a2.243 2.243 0 0 1 1.562 2.781l-.187.625a5.5 5.5 0 0 1-.375 1H14c1.094 0 2 .906 2 2 0 .563-.25 1.063-.594 1.438.063.187.094.374.094.593 0 .625-.312 1.219-.812 1.594.03.125.062.25.062.406 0 .625-.312 1.188-.75 1.563-.062 1.062-.937 1.937-2 1.937H8.938A3.54 3.54 0 0 1 7 18.438l-1.937-1.282a.753.753 0 0 1-.188-1.062.717.717 0 0 1 1.031-.188l1.938 1.281c.312.22.687.344 1.093.344H12c.25 0 .5-.25.5-.5 0-.062-.031-.093-.031-.156a.78.78 0 0 1 .437-.906c.188-.063.344-.25.344-.438a.48.48 0 0 0-.125-.312.8.8 0 0 1-.094-.75c.063-.25.281-.406.563-.469.219-.031.406-.25.406-.5 0-.125-.062-.219-.125-.312a.7.7 0 0 1-.187-.688.8.8 0 0 1 .468-.531.51.51 0 0 0 .344-.469c0-.25-.25-.5-.5-.5H9.813a.73.73 0 0 1-.657-.406c-.125-.25-.125-.531.031-.75a6 6 0 0 0 .844-1.75l.188-.625a.78.78 0 0 0-.531-.938.78.78 0 0 0-.938.532l-.156.625a4.5 4.5 0 0 1-.938 1.687l-1.625 1.75a.747.747 0 0 1-1.062.063.774.774 0 0 1-.032-1.063l1.594-1.75c.282-.312.5-.687.625-1.094l.157-.625a2.243 2.243 0 0 1 2.78-1.562M1 10h2c.531 0 1 .469 1 1v7c0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1v-7c0-.531.438-1 1-1' />
    </g>
    <defs>
      <clipPath id='c59ae922a1488c9d51fe7c9fde7a0271__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpMdBoldIcon);
export default ForwardRef;
