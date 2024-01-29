import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenMdRegularIcon = (
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
      <path d='M1 7v10q0 .438.281.719A.97.97 0 0 0 2 18h6.313l-.25 1H2q-.843-.03-1.406-.594Q.032 17.844 0 17V7q.03-.843.594-1.406Q1.157 5.032 2 5h7.688q.812 0 1.406.594l2.312 2.312Q14 8.5 14 9.344v1.531l-1 1V9.344a.97.97 0 0 0-.281-.719l-2.344-2.344A.85.85 0 0 0 10 6.063V9a.97.97 0 0 1-.281.719A.97.97 0 0 1 9 10H3a.97.97 0 0 1-.719-.281A.97.97 0 0 1 2 9V6a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7m2-1v3h6V6zm2.5 8q.03.844.75 1.313.75.375 1.5 0 .72-.469.75-1.313-.03-.844-.75-1.312-.75-.375-1.5 0-.72.469-.75 1.312M7 16.5q-1.406-.03-2.156-1.25-.688-1.25 0-2.5.75-1.219 2.156-1.25 1.407.031 2.156 1.25.688 1.25 0 2.5Q8.406 16.47 7 16.5m9.219-4.25q-.375-.28-.719 0l-.781.781 1.25 1.25.781-.781q.282-.344 0-.687zm-5.5 4.813a.4.4 0 0 0-.156.218l-.376 1.532 1.532-.375a.46.46 0 0 0 .219-.125L15.28 15l-1.25-1.25zm4.094-5.5q.437-.47 1.03-.47a1.4 1.4 0 0 1 1.063.47l.563.53q.437.47.437 1.063 0 .594-.437 1.063l-4.813 4.812a1.4 1.4 0 0 1-.687.375L9.625 20a.48.48 0 0 1-.469-.125.55.55 0 0 1-.125-.5l.563-2.312q.125-.406.406-.72z' />
    </g>
    <defs>
      <clipPath id='eb617676cd16401f4f8ea410548b81ff__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenMdRegularIcon);
export default ForwardRef;
