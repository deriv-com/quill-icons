import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateXlBoldIcon = (
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
      <path d='M21 27.75q.704-.046.75-.75V13.5H18q-.656 0-1.078-.422Q16.5 12.657 16.5 12V8.25H9q-.703.047-.75.75v3.188q-.938-.375-1.922 0-.14.046-.281.093 0 .047-.047.047V9q.047-1.266.89-2.11Q7.735 6.048 9 6h7.781q1.22 0 2.11.89l4.218 4.22Q24 12 24 13.265V27q-.047 1.266-.89 2.11-.844.843-2.11.89H10.36q.14-.375.14-.75v-1.5zM5.11 13.594l.75.281a.43.43 0 0 0 .28 0l.75-.281q.798-.281 1.313.328l.516.656a.6.6 0 0 0 .234.14l.797.095q.797.14.938.937l.14.797q0 .14.14.281l.61.469q.609.562.375 1.312l-.328.75a.43.43 0 0 0 0 .282l.281.75q.281.75-.328 1.312l-.656.469a.6.6 0 0 0-.14.281l-.095.797q-.14.797-.937.938L9 24.28v4.969q0 .422-.375.656a.8.8 0 0 1-.797-.047L6 28.641l-1.828 1.218q-.375.235-.75.047Q3 29.672 3 29.25v-4.969l-.75-.093q-.797-.141-.937-.938l-.094-.797a.6.6 0 0 0-.14-.281l-.657-.469q-.61-.562-.328-1.312l.281-.75a.43.43 0 0 0 0-.282l-.281-.75q-.281-.75.328-1.312l.656-.469a.6.6 0 0 0 .14-.281l.095-.797q.14-.797.984-.937l.75-.094a.6.6 0 0 0 .281-.14l.469-.657q.562-.61 1.312-.328M3 19.5q.046 1.687 1.5 2.578 1.5.845 3 0 1.453-.89 1.5-2.578-.047-1.687-1.5-2.578-1.5-.844-3 0-1.453.89-1.5 2.578' />
    </g>
    <defs>
      <clipPath id='36ccef5a828714030c827c394985ae2b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateXlBoldIcon);
export default ForwardRef;
