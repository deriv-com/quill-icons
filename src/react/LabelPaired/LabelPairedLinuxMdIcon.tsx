import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinuxMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.875 7.875c-.031-.031-.094-.031-.094-.062 0 0 0-.032.032-.032.03-.031.093-.031.156 0 .031.032.093.063.093.094s-.062.031-.093.031c-.032 0-.063-.031-.094-.031m-.687.031c-.032.032-.063 0-.063-.031-.031-.031.063-.062.094-.094.062-.031.125-.031.156 0 .031 0 .031.032.031.032 0 .03-.062.03-.125.062-.031 0-.031.031-.093.031m6.937 8.719c.344.406.469.688.469.938s-.188.437-.438.562c-.469.281-1.156.5-1.594 1-.437.531-.968.844-1.5.875-.53.063-1-.187-1.25-.719l-.093-.187c-.656.031-1.25-.188-1.719-.157-.687.063-1.125.22-1.5.22a1.1 1.1 0 0 1-.812.624c-.5.125-1.125 0-1.75-.312-.594-.313-1.313-.282-1.844-.407-.282-.03-.532-.156-.625-.375-.125-.218-.094-.53.062-1 .031-.156 0-.375-.031-.625-.031-.125-.031-.25-.031-.375 0-.156 0-.28.094-.406.125-.25.343-.375.562-.437.219-.094.406-.125.531-.25.157-.188.313-.469.532-.656-.094-.532 0-1.094.187-1.657.375-1.187 1.219-2.312 1.813-3.031.5-.719.656-1.281.687-2 .063-1-.75-4.25 2.438-4.25 2.53.031 2.406 2.688 2.375 4.125 0 .938.5 1.563 1.062 2.25.469.563 1.094 1.375 1.438 2.313.28.78.406 1.624.124 2.468.032.031.094.031.126.063.03.031.093.062.124.094.188.187.282.437.313.718.063.25.125.469.25.594M6.969 6.75a1.3 1.3 0 0 0-.094.688c.125 0 .281.062.406.125-.062-.375.157-.75.375-.72.282 0 .438.47.282.845-.032.062-.094.125-.125.156.218.062.343.125.406.156.25-.312.344-.812.125-1.281-.313-.657-1.063-.657-1.375.031m-1.25-.375c-.594 0-.75 1.188-.282 1.625.25-.156.22-.125.188-.156-.25-.219-.219-.875.063-.875.187-.032.343.312.28.593.126-.062.22-.093.345-.125.03-.625-.282-1.062-.594-1.062M5.28 8.281c-.125.094-.187.219-.125.375.032.156.188.344.438.5.25.125.375.344.625.469.093.031.187.031.312.063.563.03.844-.376 1.188-.47.375-.124.625-.343.718-.562.094-.281-.062-.469-.343-.594-.344-.124-.5-.156-.688-.28-.312-.188-.593-.282-.812-.282-.438 0-.719.313-.875.438 0 .03-.25.187-.438.343m.094 10.438c.063-.657-.969-1.532-1.281-2.157L3.5 15.438c-.219-.28-.437-.437-.687-.5-.25-.03-.407.063-.563.22-.156.155-.281.406-.437.562-.25.219-.313.219-.625.312a.77.77 0 0 0-.47.375c-.062.157-.062.375-.03.625.062.219.093.5.03.719v.031c-.155.407-.155.657-.093.813.25.468 1.469.187 2.406.687.969.5 2.282.532 2.344-.562m-.031-.813c1.156.813 2.562.5 3.562-.218.094-.344.188-.657.219-.907.031-.468.063-.906.125-1.25.094-.406.313-.719.688-.844.062-.656.562-.656 1.187-.406.594.281.813.5.719.813h.125c.156-.531-.438-.875-.969-1.094a2.16 2.16 0 0 0 0-1.094c-.187-.812-.719-1.5-1.094-1.844-.094 0-.062.063.063.188.375.344 1.156 1.531.75 2.656-.125-.031-.25-.031-.344-.031-.187-.906-.562-1.656-.75-2.031-.344-.656-.906-2.031-1.156-3-.156.219-.375.375-.688.469-.156.062-.312.187-.5.28-.437.25-.937.282-1.343-.03-.125-.094-.25-.22-.375-.313a1 1 0 0 1-.188-.125c-.062 1.188-.875 2.656-1.25 3.531a5.7 5.7 0 0 0-.437 1.906C3.03 13.657 3.53 12.5 3.78 12c.313-.562.344-.719.281-.656-.28.437-.687 1.125-.843 1.844-.094.374-.125.75 0 1.093.094.344.344.688.75.938 0 0 .781.437 1.219 1.031.218.313.28.563.218.781-.062.188-.281.25-.531.25.156.188.344.407.469.625m8.031-.343c.031-.188-.094-.407-.406-.782-.313-.343-.25-1.031-.563-1.312-.187-.188-.406-.156-.687-.156-.25.28-.813.624-1.219.53-.344-.093-.562-.53-.562-.937-.032 0-.032 0-.032.031-.219.094-.344.313-.437.657-.094.312-.094.719-.125 1.187-.031.375-.188.844-.313 1.282-.125.406-.187.78-.031 1.125.219.468.594.656 1.031.625.469-.063.969-.313 1.375-.813.688-.844 1.938-.937 1.969-1.437M5.406 8.656c-.125-.094-.093-.187-.062-.187.093 0 .093.094.125.156.062.031.156.125.25.188.187.156.468.312.781.312s.719-.187.938-.312c.125-.063.28-.22.437-.313.094-.062.094-.156.188-.156.093 0 .03.094-.094.219a6 6 0 0 1-.469.312c-.281.156-.625.344-1 .344-.344 0-.656-.188-.844-.344-.093-.062-.187-.156-.25-.219' />
    </g>
    <defs>
      <clipPath id='92337707fa7fdd546b27fb813918eb1c__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinuxMdIcon);
export default ForwardRef;
