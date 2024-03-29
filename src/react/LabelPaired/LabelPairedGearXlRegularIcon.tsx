import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearXlRegularIcon = (
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
      <path d='m10.453 7.781-.656 2.25c-.14.563-.563.985-1.031 1.219-.375.188-.703.375-1.032.563-.421.328-1.03.468-1.593.328l-2.25-.563h-.188A5 5 0 0 0 3 12.61l-.234.329c-.188.374-.375.75-.516 1.124 0 .047.047.141.094.188l1.64 1.64c.375.422.563 1.032.516 1.547v1.173c.047.515-.14 1.078-.516 1.5l-1.64 1.687a.36.36 0 0 0-.094.187c.14.375.328.75.516 1.125l.187.328c.235.329.469.704.703 1.032h.235l2.25-.563c.562-.14 1.172 0 1.593.282.329.234.657.421 1.032.609.468.234.89.656 1.03 1.219l.657 2.25c0 .047.047.093.094.14.469.094.937.094 1.453.094.469 0 .938 0 1.406-.094.047-.047.094-.093.094-.14l.656-2.25c.14-.563.563-.985 1.031-1.22a7.5 7.5 0 0 0 1.032-.608c.468-.282 1.031-.422 1.593-.282l2.25.563h.235c.234-.328.469-.703.703-1.032l.188-.328c.187-.375.375-.75.515-1.125a.36.36 0 0 0-.094-.187l-1.64-1.688c-.375-.422-.563-.984-.516-1.5 0-.187.047-.375.047-.609 0-.187-.047-.375-.047-.562a2.14 2.14 0 0 1 .516-1.547l1.64-1.641a.36.36 0 0 0 .094-.187c-.14-.376-.328-.75-.515-1.126L21 12.61c-.234-.375-.469-.703-.703-1.03h-.235l-2.25.562c-.562.14-1.125 0-1.593-.282a7.5 7.5 0 0 0-1.032-.609c-.468-.234-.89-.656-1.03-1.219l-.657-2.25a.36.36 0 0 0-.094-.187C12.937 7.547 12.47 7.5 12 7.5c-.516 0-.984.047-1.453.094a.36.36 0 0 0-.094.187M12 6c.61 0 1.172.047 1.781.14.094.048.14.048.235.094.422.235.797.657.937 1.125l.656 2.25c0 .094.094.235.235.282.422.187.844.422 1.219.703.14.094.28.14.375.094l2.296-.563c.47-.14 1.032-.047 1.453.234l.188.188c.328.375.61.844.89 1.312l.235.329v.046c.234.47.469.938.656 1.407.047.093.047.14.047.234a1.77 1.77 0 0 1-.515 1.406l-1.641 1.688c-.047.047-.094.187-.094.328 0 .234.047.469.047.703s-.047.469-.047.703c0 .188.047.328.094.375l1.64 1.688c.375.375.563.89.516 1.406 0 .047 0 .14-.047.234-.187.469-.422.938-.656 1.407l-.234.375c-.282.468-.563.89-.938 1.312-.047.094-.094.14-.14.188a1.86 1.86 0 0 1-1.5.234l-2.25-.563c-.094-.047-.235 0-.375.094-.375.235-.797.469-1.22.703-.14.047-.234.188-.234.282l-.656 2.203c-.14.515-.515.937-.937 1.172-.094.046-.141.046-.235.093-.61.047-1.172.094-1.781.094-.61 0-1.219-.047-1.828-.094-.094-.047-.14-.047-.235-.093A1.97 1.97 0 0 1 9 28.64l-.656-2.203c0-.094-.094-.235-.235-.282a6.3 6.3 0 0 1-1.218-.703c-.141-.094-.282-.094-.375-.094l-2.25.563a1.75 1.75 0 0 1-1.453-.235.7.7 0 0 1-.188-.14c-.375-.422-.656-.89-.937-1.36L1.5 23.86l-.047-.047a19 19 0 0 1-.656-1.406c0-.093-.047-.14-.047-.234 0-.516.14-1.031.516-1.406l1.64-1.688c.047-.047.094-.187.094-.375v-1.406c0-.14-.047-.281-.094-.328l-1.64-1.688c-.375-.375-.516-.89-.516-1.406 0-.094.047-.14.047-.234.187-.47.422-.938.656-1.407l.047-.046.188-.329c.28-.468.609-.937.937-1.312a.37.37 0 0 1 .188-.188 1.75 1.75 0 0 1 1.453-.234l2.25.563c.093.046.234 0 .375-.094.375-.235.797-.516 1.218-.703.141-.047.235-.188.235-.282L9 7.36c.14-.468.516-.89.938-1.125.093-.046.14-.046.234-.093Q11.087 6 12 6M9.375 18c0 .984.469 1.828 1.313 2.297.796.469 1.78.469 2.624 0A2.64 2.64 0 0 0 14.626 18c0-.937-.516-1.781-1.312-2.25-.844-.469-1.829-.469-2.626 0-.843.469-1.312 1.313-1.312 2.25m6.75 0c0 1.5-.797 2.86-2.062 3.61-1.313.703-2.86.703-4.126 0-1.312-.75-2.062-2.11-2.062-3.61 0-1.453.75-2.812 2.063-3.562 1.265-.704 2.812-.704 4.124 0 1.266.75 2.063 2.109 2.063 3.562' />
    </g>
    <defs>
      <clipPath id='193d793244744fce57699af0235820f6__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearXlRegularIcon);
export default ForwardRef;
