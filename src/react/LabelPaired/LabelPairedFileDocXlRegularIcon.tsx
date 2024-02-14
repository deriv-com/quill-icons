import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileDocXlRegularIcon = (
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
      <path d='M3 28.5h1.5V30H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6h7.313a2.17 2.17 0 0 1 1.593.656l5.438 5.438q.656.656.656 1.594V19.5h-1.5V15h-5.25a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 9 12.75V7.5H3q-.656 0-1.078.422Q1.5 8.343 1.5 9v18q0 .657.422 1.078.421.422 1.078.422m13.5-15a1.3 1.3 0 0 0-.234-.328l-5.438-5.438a.7.7 0 0 0-.328-.187v5.203q.047.703.75.75zm-8.25 9h1.5q.937.047 1.594.656.61.657.656 1.594v3a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 9.75 30h-1.5q-.703-.046-.75-.75v-6q.046-.704.75-.75m.75 6h.75q.703-.046.75-.75v-3q-.047-.704-.75-.75H9zm12.375-6h.75q.797 0 1.313.563.562.514.562 1.312v.375q-.046.704-.75.75-.704-.046-.75-.75v-.375q-.046-.329-.375-.375h-.75q-.329.046-.375.375v3.75q.046.329.375.375h.75q.329-.046.375-.375v-.375q.046-.704.75-.75.704.046.75.75v.375q0 .797-.562 1.313-.516.562-1.313.562h-.75q-.797 0-1.312-.562-.563-.516-.563-1.313v-3.75q0-.797.563-1.312.514-.563 1.312-.563M13.5 24.375q0-.797.563-1.312.514-.563 1.312-.563h.75q.797 0 1.313.563.562.514.562 1.312v3.75q0 .797-.562 1.313-.516.562-1.313.562h-.75q-.797 0-1.312-.562-.563-.516-.563-1.313zM15.375 24q-.328.046-.375.375v3.75q.047.329.375.375h.75q.329-.046.375-.375v-3.75q-.046-.329-.375-.375z' />
    </g>
    <defs>
      <clipPath id='9b3ca6af2be6ce0eea19f31ecbf0e62b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileDocXlRegularIcon);
export default ForwardRef;
