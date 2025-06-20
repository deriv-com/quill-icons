import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCsvMdBoldIcon = (
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
      <path d='M2 18.5h1V20H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h5.156c.532 0 1.032.219 1.407.594l2.843 2.843c.375.375.594.875.594 1.407V13h-1.5V9H8c-.562 0-1-.437-1-1V5.5H2c-.281 0-.5.25-.5.5v12c0 .281.219.5.5.5M6.25 15h.5c.688 0 1.25.563 1.25 1.25v.25c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-.25a.27.27 0 0 0-.25-.25h-.5a.246.246 0 0 0-.25.25v2.5c0 .156.094.25.25.25h.5c.125 0 .25-.094.25-.25v-.25c0-.25.219-.5.5-.5.25 0 .5.25.5.5v.25C8 19.469 7.438 20 6.75 20h-.5C5.531 20 5 19.469 5 18.75v-2.5c0-.687.531-1.25 1.25-1.25m4.156 0H11.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-1.094c-.25 0-.406.188-.406.438 0 .156.094.28.219.375l1.187.5c.5.218.844.75.844 1.28 0 .782-.656 1.407-1.437 1.407H9.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1.313c.25 0 .437-.156.437-.406a.41.41 0 0 0-.25-.375l-1.187-.5c-.5-.219-.813-.75-.813-1.282 0-.78.625-1.437 1.406-1.437m3.094 0c.25 0 .5.25.5.5v1c0 .719.156 1.438.5 2.063.313-.625.5-1.344.5-2.063v-1c0-.25.219-.5.5-.5.25 0 .5.25.5.5v1a5.6 5.6 0 0 1-.937 3.063l-.157.218A.46.46 0 0 1 14.5 20c-.187 0-.344-.062-.437-.219l-.157-.218A5.6 5.6 0 0 1 13 16.5v-1c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='98114c5c73206d7acf83f6449573db6c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCsvMdBoldIcon);
export default ForwardRef;
