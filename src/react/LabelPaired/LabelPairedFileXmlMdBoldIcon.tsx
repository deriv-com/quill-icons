import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileXmlMdBoldIcon = (
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
      <path d='M2 18.5h1.5V20H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h5.156c.532 0 1.032.219 1.407.594l2.843 2.843c.375.375.594.875.594 1.407V13.5h-1.5V9H8c-.562 0-1-.437-1-1V5.5H2c-.281 0-.5.25-.5.5v12c0 .281.219.5.5.5m4-3q0 .375.188.656l.312.469.281-.469C6.906 15.97 7 15.75 7 15.5s.219-.5.5-.5c.25 0 .5.25.5.5q0 .657-.375 1.219l-.531.781.531.813c.25.375.375.78.375 1.187 0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5c0-.219-.094-.437-.219-.625l-.281-.469-.312.469A1.13 1.13 0 0 0 6 19.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5c0-.406.125-.844.344-1.187l.531-.813-.531-.781A2.4 2.4 0 0 1 5 15.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5m8 4v-4c0-.25.219-.5.5-.5.25 0 .5.25.5.5V19h.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-1a.494.494 0 0 1-.5-.5m-4.656-4.469c.219-.062.469.031.562.219L11 17.031l1.063-1.781a.505.505 0 0 1 .562-.219c.219.063.375.25.375.469v4c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-2.187l-.594.968a.49.49 0 0 1-.406.25.5.5 0 0 1-.437-.25L10 17.313V19.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-4a.47.47 0 0 1 .344-.469' />
    </g>
    <defs>
      <clipPath id='7fa4697188af86fc59ac8f6d620ea0e3__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileXmlMdBoldIcon);
export default ForwardRef;
