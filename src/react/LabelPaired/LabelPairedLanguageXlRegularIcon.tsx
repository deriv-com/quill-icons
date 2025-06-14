import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.25 10.5H3c-.844 0-1.5.703-1.5 1.5v12c0 .844.656 1.5 1.5 1.5h11.25zm1.5 0v15H27c.797 0 1.5-.656 1.5-1.5V12c0-.797-.703-1.5-1.5-1.5zM30 12v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V12c0-1.64 1.313-3 3-3h24c1.64 0 3 1.36 3 3M8.156 14.016l3 7.5c.188.375 0 .797-.422.937-.375.188-.796 0-.937-.422l-.422-.984H5.578l-.422.984c-.14.422-.562.61-.937.422-.422-.14-.61-.562-.422-.937l3-7.5c.094-.328.375-.516.703-.516a.69.69 0 0 1 .656.516M7.5 16.313 6.188 19.5h2.578zm15.75-2.063V15h3c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-.234l-.188.563c-.469 1.218-1.172 2.343-2.062 3.234.14.094.28.187.468.281l.891.563c.328.187.469.656.234 1.03-.187.329-.656.47-1.03.235l-.892-.515a10 10 0 0 1-.843-.61c-.375.282-.797.516-1.219.75l-.797.422c-.375.188-.844 0-1.031-.375-.188-.328 0-.797.328-.984l.844-.422c.234-.094.468-.235.703-.375l-.985-.985c-.28-.328-.28-.796 0-1.078.329-.28.797-.28 1.079 0l1.078 1.078c.797-.75 1.406-1.687 1.828-2.765V16.5H18.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h3v-.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75' />
    </g>
    <defs>
      <clipPath id='43ae4632aa7d6efd92c21e235c4467e9__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageXlRegularIcon);
export default ForwardRef;
