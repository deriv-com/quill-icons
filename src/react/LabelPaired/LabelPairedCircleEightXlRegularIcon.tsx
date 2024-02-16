import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M22.5 18q-.047-2.859-1.406-5.25-1.407-2.39-3.844-3.844Q14.766 7.5 12 7.5T6.75 8.906Q4.313 10.36 2.906 12.75 1.546 15.141 1.5 18q.047 2.859 1.406 5.25 1.407 2.39 3.844 3.844Q9.234 28.5 12 28.5t5.25-1.406q2.437-1.453 3.844-3.844 1.36-2.391 1.406-5.25M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m12.563-6q1.359.047 2.25.938.89.89.937 2.25-.046 1.452-1.078 2.39 1.406 1.031 1.453 2.86-.047 1.5-1.031 2.53-1.031.985-2.531 1.032h-1.126q-1.5-.047-2.53-1.031-.985-1.032-1.032-2.532.047-1.827 1.453-2.859-1.031-.938-1.078-2.39.047-1.36.938-2.25.89-.891 2.25-.938zm-1.126 4.875h1.126q.702 0 1.171-.516.516-.468.516-1.172 0-.702-.516-1.171a1.52 1.52 0 0 0-1.171-.516h-1.126q-.702 0-1.171.516a1.52 1.52 0 0 0-.516 1.172q0 .703.516 1.171.468.516 1.172.516m1.126 1.5h-1.126q-.89 0-1.453.61-.609.562-.609 1.453 0 .89.61 1.453.562.609 1.453.609h1.124q.891 0 1.454-.61.609-.562.609-1.453 0-.89-.61-1.453-.561-.609-1.453-.609' />
    </g>
    <defs>
      <clipPath id='24bdae71ab6853d65dc8053def1b4d76__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightXlRegularIcon);
export default ForwardRef;
