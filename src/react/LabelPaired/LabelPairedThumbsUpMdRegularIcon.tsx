import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpMdRegularIcon = (
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
      <path d='m9 6.563-.125.53a5.24 5.24 0 0 1-2.25 3.032l-.094.063c-.25.156-.468.374-.656.624a.5.5 0 0 1-.687.126c-.22-.188-.282-.5-.125-.72A3.6 3.6 0 0 1 6 9.345l.094-.063a4.28 4.28 0 0 0 1.812-2.469l.125-.5c.281-.937 1.219-1.5 2.156-1.25.938.282 1.5 1.22 1.25 2.157l-.156.531A8.6 8.6 0 0 1 10.812 9H14c1.094 0 2 .906 2 2 0 .563-.25 1.063-.594 1.438q.094.28.094.562c0 .594-.281 1.125-.656 1.5.094.219.156.5.156.75 0 .75-.406 1.406-1 1.75 0 1.125-.906 2-2 2H9.188a3.5 3.5 0 0 1-1.938-.562l-1.219-.813c-.375-.281-.718-.594-.968-1a.48.48 0 0 1 .156-.687.48.48 0 0 1 .687.156c.188.281.407.5.688.687l1.218.813c.407.281.875.406 1.375.406H12c.531 0 1-.437 1-1 0-.062-.031-.125-.031-.187-.063-.25.094-.532.344-.594.374-.125.687-.5.687-.938 0-.25-.094-.469-.219-.625a.47.47 0 0 1-.094-.406.48.48 0 0 1 .25-.344.96.96 0 0 0 .563-.875.87.87 0 0 0-.156-.5.494.494 0 0 1 .187-.656c.281-.187.469-.5.469-.844 0-.562-.469-1-1-1H9.969c-.188 0-.344-.125-.438-.281a.48.48 0 0 1 0-.5 6 6 0 0 0 .781-1.781l.157-.5a.78.78 0 0 0-.531-.938.78.78 0 0 0-.938.532M1 11v7h2v-7zm-1 0c0-.531.438-1 1-1h2c.531 0 1 .469 1 1v7c0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1z' />
    </g>
    <defs>
      <clipPath id='b6123d290395eae8149114fbdb1245de__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpMdRegularIcon);
export default ForwardRef;
