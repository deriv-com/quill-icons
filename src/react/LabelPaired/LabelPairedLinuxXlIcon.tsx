import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinuxXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.313 11.813c-.047-.047-.141-.047-.141-.094 0 0 0-.047.047-.047.047-.047.14-.047.234 0 .047.047.14.094.14.14s-.093.047-.14.047-.094-.046-.14-.046m-1.032.046c-.047.047-.094 0-.094-.046-.046-.047.094-.094.141-.141.094-.047.188-.047.235 0 .046 0 .046.047.046.047 0 .047-.093.047-.187.094-.047 0-.047.046-.14.046m10.407 13.079c.515.609.703 1.03.703 1.406s-.282.656-.657.843c-.703.422-1.734.75-2.39 1.5-.657.797-1.453 1.266-2.25 1.313-.797.094-1.5-.281-1.875-1.078l-.14-.281c-.985.047-1.876-.282-2.579-.235-1.031.094-1.687.328-2.25.328a1.65 1.65 0 0 1-1.219.938c-.75.187-1.687 0-2.625-.469-.89-.469-1.968-.422-2.765-.61-.422-.046-.797-.234-.938-.562-.187-.328-.14-.797.094-1.5.047-.234 0-.562-.047-.937-.047-.188-.047-.375-.047-.563 0-.234 0-.422.14-.61.188-.374.516-.562.845-.655.328-.141.609-.188.796-.375.235-.282.47-.703.797-.985-.14-.797 0-1.64.281-2.484.563-1.781 1.829-3.469 2.72-4.547.75-1.078.984-1.922 1.03-3C7.407 10.875 6.188 6 10.97 6c3.797.047 3.61 4.031 3.562 6.188 0 1.406.75 2.343 1.594 3.374.703.844 1.64 2.063 2.156 3.47.422 1.171.61 2.437.188 3.702.047.047.14.047.187.094s.14.094.188.14c.281.282.422.657.468 1.079.094.375.188.703.375.89m-9.235-14.813c-.14.328-.187.703-.14 1.031.187 0 .421.094.609.188-.094-.563.234-1.125.562-1.078.422 0 .657.703.422 1.265-.047.094-.14.188-.187.235.328.093.515.187.61.234.374-.469.515-1.219.187-1.922-.47-.984-1.594-.984-2.063.047m-1.875-.562c-.89 0-1.125 1.78-.422 2.437.375-.234.328-.187.281-.234-.374-.328-.328-1.313.094-1.313.281-.047.516.469.422.89.188-.093.328-.14.516-.187.047-.937-.422-1.594-.89-1.594m-.656 2.859c-.188.14-.281.328-.188.562.047.235.282.516.657.75.375.188.562.516.937.704.14.046.281.046.469.093.844.047 1.265-.562 1.781-.703.563-.187.938-.515 1.078-.844.14-.421-.094-.703-.515-.89-.516-.188-.75-.235-1.032-.422-.468-.281-.89-.422-1.218-.422-.657 0-1.078.469-1.313.656 0 .047-.375.281-.656.516m.14 15.656c.094-.984-1.453-2.297-1.921-3.234l-.891-1.688c-.328-.422-.656-.656-1.031-.75-.375-.047-.61.094-.844.328s-.422.61-.656.844c-.375.328-.469.328-.938.469-.281.094-.515.234-.703.562-.094.235-.094.563-.047.938.094.328.14.75.047 1.078v.047c-.234.61-.234.984-.14 1.219.375.703 2.203.28 3.609 1.03 1.453.75 3.422.798 3.516-.843m-.046-1.219c1.734 1.22 3.843.75 5.343-.328.141-.515.282-.984.329-1.36.046-.702.093-1.358.187-1.874.14-.61.469-1.078 1.031-1.266.094-.984.844-.984 1.781-.61.891.423 1.22.75 1.079 1.22h.187c.235-.797-.656-1.313-1.453-1.641.14-.562.14-1.125 0-1.64-.281-1.22-1.078-2.25-1.64-2.766-.141 0-.094.093.093.281.563.516 1.735 2.297 1.125 3.984-.187-.047-.375-.047-.515-.047-.282-1.359-.844-2.484-1.126-3.046-.515-.985-1.359-3.047-1.734-4.5-.234.328-.562.562-1.031.703-.235.094-.469.281-.75.422-.656.375-1.406.422-2.016-.047-.187-.14-.375-.328-.562-.469a1.5 1.5 0 0 1-.281-.187c-.094 1.78-1.313 3.984-1.876 5.296a8.5 8.5 0 0 0-.656 2.86c-.984-1.36-.234-3.094.14-3.844.47-.844.516-1.078.423-.984-.422.656-1.032 1.687-1.266 2.765-.14.563-.187 1.125 0 1.64.14.517.516 1.032 1.125 1.407 0 0 1.172.656 1.828 1.547.328.469.422.844.328 1.172-.093.281-.421.375-.796.375.234.281.515.61.703.937m12.047-.515c.046-.282-.141-.61-.61-1.172-.469-.516-.375-1.547-.844-1.969-.28-.281-.609-.234-1.03-.234-.376.422-1.22.937-1.829.797-.516-.141-.844-.797-.844-1.407-.047 0-.047 0-.047.047-.328.14-.515.469-.656.985-.14.468-.14 1.078-.187 1.78-.047.563-.282 1.267-.47 1.923-.187.61-.28 1.172-.046 1.687.328.703.89.985 1.547.938.703-.094 1.453-.469 2.062-1.219 1.032-1.266 2.907-1.406 2.953-2.156M8.108 12.984c-.187-.14-.14-.28-.093-.28.14 0 .14.14.187.233.094.047.235.188.375.282.281.234.703.469 1.172.469s1.078-.282 1.406-.47c.188-.093.422-.327.656-.468.141-.094.141-.234.282-.234s.047.14-.14.328c-.188.14-.47.328-.704.469-.422.234-.937.515-1.5.515-.516 0-.984-.281-1.266-.515-.14-.094-.28-.235-.375-.329' />
    </g>
    <defs>
      <clipPath id='4c439e23d30d0191f71be46acc49952d__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinuxXlIcon);
export default ForwardRef;
