import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivP2pXlBoldIcon = (
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
      <path d='M9 14.625c-.281 0-.61.047-.984.047-.328.047-.703.094-1.032.14v6.657h1.5v-2.25H9c.984 0 1.781-.188 2.297-.563.562-.328.844-.937.844-1.734s-.282-1.406-.797-1.735c-.563-.374-1.313-.562-2.344-.562m.094 1.313c.234 0 .422 0 .61.046.187.047.327.094.468.141.14.094.234.188.281.328.094.094.094.281.094.469 0 .375-.094.656-.375.797-.281.14-.656.187-1.172.187h-.516v-1.922c.094 0 .188-.046.282-.046zm7.734.562c0-.281-.047-.562-.14-.797a1.8 1.8 0 0 0-.422-.61 2.5 2.5 0 0 0-.703-.374c-.282-.094-.61-.14-1.032-.14s-.844.093-1.219.28c-.374.141-.703.375-.984.657l.703.984c.047-.047.14-.094.235-.14.093-.094.187-.188.328-.235.094-.094.234-.14.422-.187.14-.094.28-.094.468-.094.235 0 .47.047.61.14.187.141.234.329.234.61 0 .14 0 .281-.094.422-.046.093-.14.234-.234.375l-.375.375-.422.422c-.187.187-.422.375-.61.562-.187.188-.374.422-.562.656-.14.235-.281.469-.375.703a2.7 2.7 0 0 0-.14.891v.469h4.5V20.25h-2.907c.047-.047.094-.14.141-.234.094-.094.188-.188.281-.328.14-.094.235-.235.328-.329l.329-.328.562-.562c.234-.188.375-.375.563-.61.14-.187.28-.422.375-.656q.14-.352.14-.703m3-1.875h.047c-.281 0-.61.047-.984.047-.375.047-.75.094-1.078.14v6.657h1.546v-2.25h.47c.983 0 1.78-.188 2.343-.563.515-.328.797-.937.797-1.734s-.282-1.406-.797-1.735c-.563-.374-1.313-.562-2.344-.562m.14 1.313c.188 0 .423 0 .563.046.188.047.375.094.469.141.14.094.234.188.281.328.094.094.14.281.14.469 0 .375-.14.656-.421.797-.234.14-.656.187-1.172.187h-.469v-1.922c.047 0 .141-.046.235-.046zM22.5 8.25h-15a2.25 2.25 0 0 0-2.25 2.25v15c0 1.266.984 2.25 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25v-15c0-1.219-1.031-2.25-2.25-2.25M7.5 6h15c2.484 0 4.5 2.016 4.5 4.5v15c0 2.484-2.016 4.5-4.5 4.5h-15A4.5 4.5 0 0 1 3 25.5v-15C3 8.016 5.016 6 7.5 6' />
    </g>
    <defs>
      <clipPath id='22b58c756d309a572320f5968845499c__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivP2pXlBoldIcon);
export default ForwardRef;
