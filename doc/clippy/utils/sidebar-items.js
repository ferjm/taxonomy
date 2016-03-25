initSidebarItems({"constant":[["BEGIN_UNWIND",""],["BOX_NEW_PATH",""],["BTREEMAP_ENTRY_PATH",""],["BTREEMAP_PATH",""],["CLONE_PATH",""],["CLONE_TRAIT_PATH",""],["COW_PATH",""],["DEBUG_FMT_METHOD_PATH",""],["DEFAULT_TRAIT_PATH",""],["DISPLAY_FMT_METHOD_PATH",""],["DROP_PATH",""],["FMT_ARGUMENTS_NEWV1_PATH",""],["FMT_ARGUMENTV1_NEW_PATH",""],["HASHMAP_ENTRY_PATH",""],["HASHMAP_PATH",""],["HASH_PATH",""],["IO_PRINT_PATH",""],["LL_PATH",""],["MUTEX_PATH",""],["OPEN_OPTIONS_PATH",""],["OPTION_PATH",""],["RANGE_FROM_PATH",""],["RANGE_FULL_PATH",""],["RANGE_INCLUSIVE_NON_EMPTY_PATH",""],["RANGE_PATH",""],["RANGE_TO_INCLUSIVE_PATH",""],["RANGE_TO_PATH",""],["REGEX_NEW_PATH",""],["RESULT_PATH",""],["STRING_PATH",""],["VEC_FROM_ELEM_PATH",""],["VEC_PATH",""]],"fn":[["camel_case_from","Returns index of last CamelCase component of `s`."],["camel_case_until","Returns index of character after first CamelCase component of `s`"],["differing_macro_contexts","Returns true if the two spans come from differing expansions (i.e. one is from a macro and one isn't)."],["expr_block","Like `snippet_block`, but add braces if the expr is not an `ExprBlock`. Also takes an `Option<String>` which can be put inside the braces."],["get_enclosing_block",""],["get_item_name","Get the name of the item the expression is in, if available."],["get_parent_expr","Get a parent expressions if any – this is useful to constrain a lint."],["get_trait_def_id","Convenience function to get the `DefId` of a trait by path."],["implements_trait","Check whether a type implements a trait. See also `get_trait_def_id`."],["in_external_macro","Returns true if the macro that expanded the crate was outside of the current crate or was a compiler plugin."],["in_macro","Returns true if this `expn_info` was expanded by any macro."],["is_adjusted",""],["is_expn_of","Return the pre-expansion span if is this comes from an expansion of the macro `name`."],["is_from_for_desugar","Checks if a `let` decl is from a `for` loop desugaring."],["is_integer_literal","Check whether the given expression is a constant literal of the given value."],["match_def_path","Check if a `DefId`'s path matches the given absolute type path usage."],["match_impl_method","Check if the method call given in `expr` belongs to given type."],["match_path","Match a `Path` against a slice of segment string literals."],["match_path_ast","Match a `Path` against a slice of segment string literals, e.g."],["match_trait_method","Check if the method call given in `expr` belongs to given trait."],["match_type","Check if type is struct or enum type with given def path."],["method_chain_args","Match an `Expr` against a chain of methods, and return the matched `Expr`s."],["path_to_def","Get the definition associated to a path. TODO: investigate if there is something more efficient for that."],["snippet","Convert a span to a code snippet if available, otherwise use default."],["snippet_block","Convert a span (from a block) to a code snippet if available, otherwise use default. This trims the code of indentation, except for the first line. Use it for blocks or block-like things which need to be printed as such."],["snippet_opt","Convert a span to a code snippet. Returns `None` if not available."],["span_help_and_lint",""],["span_lint",""],["span_lint_and_then",""],["span_note_and_lint",""],["trim_multiline","Trim indentation from a multiline string with possibility of ignoring the first line."],["unsugar_range","Unsugar a `hir` range."],["walk_ptrs_ty","Return the base type for references and raw pointers."],["walk_ptrs_ty_depth","Return the base type for references and raw pointers, and count reference depth."]],"struct":[["DiagnosticWrapper",""],["LimitStack",""],["SpanlessEq","Type used to check whether two ast are the same. This is different from the operator `==` on ast types as this operator would compare true equality with ID and span."],["SpanlessHash","Type used to hash an ast element. This is different from the `Hash` trait on ast types as this trait would consider IDs and spans."],["UnsugaredRange","Represents a range akin to `ast::ExprKind::Range`."]],"type":[["MethodArgs",""]]});